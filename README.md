Priority Notification System - Affordmed Evaluation
This project is a full-stack application designed to fetch, sort, and display notifications based on a specific priority hierarchy. It was built for the Affordmed technical evaluation.

Features
Priority-Based Sorting: Notifications are ordered by weight: Placement (3), Result (2), and Event (1).

Recency Tie-Breaker: When priorities match, the system displays the most recent timestamp first.

Category Filtering: The user interface allows for real-time filtering of notifications by type.

Authentication: Secure backend communication using a Bearer Token for API access.

Professional UI: A blue-themed dashboard designed for high readability and data organization.

Technical Stack
Frontend: React.js

Backend: Node.js, Express.js

API Communication: Axios (Backend), Fetch API (Frontend)

Setup Instructions
Backend
Navigate to the backend directory: cd notification_app_be

Install necessary packages: npm install express axios cors

Launch the server: node index.js (Server runs on port 5000)

Frontend
Navigate to the frontend directory: cd notification_app_fe

Install dependencies: npm install

Launch the application: npm run dev (Application runs on port 5173)

Design and Logic
Fallback Mechanism: The backend is configured to serve sorted mock data if the external evaluation service is unreachable. This ensures the application remains functional for review during server downtime.

Data Flow: The backend fetches raw data, applies the sorting algorithm based on the PRIORITY_MAP, and delivers a clean JSON response to the React frontend.

Developer: Banu Pragathi

Registration ID: RA2311026020087P

Final Terminal Commands to Push
Once you have saved the file above, run these commands to ensure everything is synced:

Bash
# 1. Stage the specific README file
git add notification_app_fe/README.md

# 2. Commit the change
git commit -m "docs: finalized README with professional formatting and setup steps"

# 3. Push to your repository
git push origin main
