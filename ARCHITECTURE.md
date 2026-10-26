# SWYNEX Task Manager — System Architecture

## 1. Project Overview

SWYNEX Task Manager is a web-based application that allows users to create, view, complete, and delete tasks. It uses a React frontend, a Node.js and Express backend, and MongoDB Atlas for persistent data storage.

## 2. Technology Stack

- **Frontend:** React, Vite, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Database Integration:** Mongoose
- **API Communication:** REST API using JSON
- **Frontend Hosting:** Render Static Site
- **Backend Hosting:** Render Web Service
- **Version Control:** Git and GitHub

## 3. System Architecture

```text
                 USER
                  |
                  v
       React Frontend (Vite)
       Hosted on Render
                  |
                  | HTTP Requests / JSON
                  v
       Express.js REST API
       Hosted on Render
                  |
                  | Mongoose
                  v
          MongoDB Atlas
          Cloud Database
```

## 4. Main Components

### 4.1 Frontend

The frontend provides the user interface for managing tasks. It allows users to add new tasks, view existing tasks, update their completion status, filter tasks, and delete tasks.

### 4.2 Backend

The backend is built using Node.js and Express.js. It exposes REST API endpoints, processes incoming requests, communicates with the database, and returns JSON responses.

### 4.3 Database

MongoDB Atlas stores task information in the cloud. Mongoose is used to define the task data structure and interact with the database.

## 5. API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check backend health |
| GET | `/api/tasks` | Retrieve tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## 6. Application Workflow

1. The user opens the deployed React application.
2. The frontend sends an HTTP request to the backend API.
3. Express processes the request and uses Mongoose to access MongoDB Atlas.
4. MongoDB stores or retrieves the requested task information.
5. The backend returns a JSON response.
6. The frontend updates the dashboard to display the result.

## 7. Deployment

The frontend is deployed as a Render Static Site, while the backend runs as a separate Render Web Service. MongoDB Atlas provides cloud-based data persistence.

GitHub is used for version control. Changes pushed to the configured branch can trigger automatic deployments on Render.

## 8. Testing and Validation

The application was tested to verify that users can create tasks, retain saved tasks after refreshing the page, and delete tasks. The live deployment was also checked to confirm that the dashboard loads and communicates with the backend.

## 9. Conclusion

SWYNEX Task Manager demonstrates a full-stack web application using React, Express.js, and MongoDB Atlas. Separating the frontend, backend, and database makes the application easier to maintain and deploy.