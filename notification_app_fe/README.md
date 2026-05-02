# Priority Notification System - Affordmed Evaluation

This project is a full-stack application designed to fetch, sort, and display notifications based on a specific priority hierarchy. Built for the Affordmed technical evaluation.

##  Features
- **Priority-Based Sorting**: Notifications are automatically ordered: Placement (Weight 3) > Result (Weight 2) > Event (Weight 1).
- **Recency Tie-Breaker**: For items with the same priority, the most recent timestamp is shown first.
- **Real-Time Filtering**: Users can filter notifications by category using the UI buttons.
- **Authentication**: Backend integration with Bearer Token for secure API access.
- **Responsive UI**: A modern blue-themed dashboard for clear data visualization.

##  Technical Stack
- **Frontend**: React.js, CSS3
- **Backend**: Node.js, Express.js
- **API Communication**: Axios (Backend), Fetch API (Frontend)

##  Setup Instructions

### Backend
1. Navigate to the backend folder: `cd notification_app_be`
2. Install dependencies: `npm install express axios cors`
3. Start the server: `node index.js` (Runs on port 5000)

### Frontend
1. Navigate to the frontend folder: `cd notification_app_fe`
2. Install dependencies: `npm install`
3. Start the app: `npm run dev` (Runs on port 5173)

##  Design Decisions
- **Mock Data Fallback**: I implemented a fallback mechanism that serves sorted mock data if the external evaluation API is unreachable or blocked. This ensures the UI remains functional for review at all times.
- **Visual Theme**: Transitioned to a "Deep Blue" gradient theme for a professional, high-contrast look suitable for a priority dashboard.

**Developer**: Banu Pragathi  
**Reg ID**: RA2311026020087