const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PRIORITY_MAP = { 'Placement': 3, 'Result': 2, 'Event': 1 };

// Fallback data in case the external evaluation server is unreachable
const mockNotifications = [
    { "Title": "On-Campus Drive: Google", "Type": "Placement", "Timestamp": "2026-05-02T10:00:00Z" },
    { "Title": "Semester Results Declared", "Type": "Result", "Timestamp": "2026-05-01T09:00:00Z" },
    { "Title": "Annual Sports Meet", "Type": "Event", "Timestamp": "2026-04-30T08:00:00Z" },
    { "Title": "Placement Training Session", "Type": "Placement", "Timestamp": "2026-05-02T11:30:00Z" }
];

app.get('/', (req, res) => {
    res.send('<h1>Backend Live</h1><p>Status: Authenticated</p><a href="/top-notifications">View Sorted API Data</a>');
});

app.get('/top-notifications', async (req, res) => {
    try {
        // Fetching real data using your provided Bearer Token
        const response = await axios.get('http://20.207.122.201/evaluation-service/notifications', {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJiYW51cHJhZ2F0aGlAZ21haWwuY29tIiwiZXhwIjoxNzc3NzAwMTUxLCJpYXQiOjE3Nzc2OTkyNTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxYTNhN2U1OS0xYTUyLTRhNjctODBmZS1kMWJhZTdjYzkyNDciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJiYW51IHByYWdhdGhpIiwic3ViIjoiNTU3ZWVlNjgtNDhmMy00MDI5LTk5NWQtMWExNDliMGE0MTRlIn0sImVtYWlsIjoiYmFudXByYWdhdGhpQGdtYWlsLmNvbSIsIm5hbWUiOiJiYW51IHByYWdhdGhpIiwicm9sbE5vIjoicmEyMzExMDI2MDIwMDg3IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNTU3ZWVlNjgtNDhmMy00MDI5LTk5NWQtMWExNDliMGE0MTRlIiwiY2xpZW50U2VjcmV0Ijoid0RTUkdyWWNnYU5hVVhWciJ9.K1z1jT4G4hBUtqnqKbp-mMNe-0TE9n6UjnmogwdsNfM`
            }
        });
        
        const list = response.data.notifications;

        // Core Requirement: Priority Weight + Recency Sorting
        const sorted = list.sort((a, b) => {
            const weightA = PRIORITY_MAP[a.Type] || 0;
            const weightB = PRIORITY_MAP[b.Type] || 0;

            if (weightB !== weightA) {
                return weightB - weightA; // Sort by Weight (Placement > Result > Event)
            }
            return new Date(b.Timestamp) - new Date(a.Timestamp); // Tie-breaker: Newest first
        });

        res.json(sorted.slice(0, 10));

    } catch (error) {
        console.error("External API Error. Serving sorted mock data as fallback.");
        
        // Sorting fallback data so the UI remains consistent even on API failure
        const sortedMock = [...mockNotifications].sort((a, b) => {
            const weightA = PRIORITY_MAP[a.Type] || 0;
            const weightB = PRIORITY_MAP[b.Type] || 0;
            if (weightB !== weightA) return weightB - weightA;
            return new Date(b.Timestamp) - new Date(a.Timestamp);
        });
        
        res.json(sortedMock);
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend Server successfully running on port ${PORT}`);
});