# Priority Notification System - Affordmed Evaluation

This project is a **full-stack application** designed to fetch, sort, and display notifications based on a specific **priority hierarchy**. It was developed as part of the **Affordmed technical evaluation**.

## Features
- **Priority-Based Sorting**: Notifications are strictly ordered by weight: **Placement (3)**, **Result (2)**, and **Event (1)**.
- **Recency Tie-Breaker**: When priorities are identical, the system automatically displays the **most recent timestamp** first.
- **Category Filtering**: The user interface includes functional buttons for **real-time filtering** by notification type.
- **Authentication**: Secure backend integration using a **Bearer Token** for authorized API access.
- **Professional UI**: A **blue-themed dashboard** optimized for clarity, using gradients and high-contrast text.

## Technical Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **API Communication**: **Axios** (Backend), **Fetch API** (Frontend)

## Setup Instructions

### Backend
1. **Navigate** to the backend directory: `cd notification_app_be`
2. **Install** necessary packages: `npm install express axios cors`
3. **Launch** the server: `node index.js` (Server runs on **Port 5000**)

### Frontend
1. **Navigate** to the frontend directory: `cd notification_app_fe`
2. **Install** dependencies: `npm install`
3. **Launch** the application: `npm run dev` (Application runs on **Port 5173**)

## Design and Logic
- **Fallback Mechanism**: The backend is configured to serve **sorted mock data** if the external evaluation service is unreachable. This ensures the application remains **fully functional** for review regardless of API status.
- **Data Flow**: The backend fetches raw data, applies the **sorting algorithm** based on a defined `PRIORITY_MAP`, and delivers a structured JSON response to the React frontend.

**Developer**: Banu Pragathi  
**Registration ID**: RA2311026020087
