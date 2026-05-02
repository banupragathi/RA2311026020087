// notification_app_fe/src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('All');

  const fetchNotifications = async () => {
    try {
      // Points to the local backend port we fixed earlier
      const response = await fetch('http://localhost:5000/top-notifications');
      if (!response.ok) throw new Error("Backend not responding");
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const filteredData = filter === 'All' 
    ? notifications 
    : notifications.filter(n => n.Type === filter);

  return (
    <div className="app-container">
      <header>
        <h1>Priority Inbox</h1>
        <div className="button-group">
          {['All', 'Placement', 'Result', 'Event'].map(f => (
            <button key={f} 
                    onClick={() => setFilter(f)} 
                    className={filter === f ? 'active' : ''}>
              {f === 'All' ? 'All' : `${f}s`}
            </button>
          ))}
          <button onClick={fetchNotifications} className="refresh-btn">🔄 Refresh</button>
        </div>
      </header>

      <div className="notification-list">
        {filteredData.map((item, index) => {
          // Assign shade based on index, looping through the 3 shades defined in CSS
          const shadeClass = `shade-${(index % 3) + 1}`;
          
          return (
            <div key={index} className={`card ${shadeClass}`}>
              <div className="card-content">
                <h3>{item.Title}</h3>
                <span className="badge">{item.Type}</span>
                <p className="time">{new Date(item.Timestamp).toLocaleString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;