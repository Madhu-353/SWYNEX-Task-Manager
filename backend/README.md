# Backend

## Overview

The backend of the SWYNEX Task Manager will be developed using Node.js and Express.js.

The backend will provide REST APIs that allow the frontend to communicate with the application and database.

## Planned API Groups

### Authentication

- User registration
- User login
- User logout

### Tasks

- Create task
- View tasks
- View individual task
- Update task
- Delete task
- Mark task as completed

## Planned API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| POST | /api/auth/logout | Logout user |
| GET | /api/tasks | Get tasks |
| GET | /api/tasks/:id | Get one task |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

## Database

The backend will communicate with MongoDB to store:

- User information
- Task information

## Authentication

JWT authentication will be used to protect private API routes.

## Security

- Passwords will be hashed.
- Protected routes will require authentication.
- Users will only access their own tasks.
- Sensitive credentials will be stored in environment variables.
- `.env` files will not be uploaded to GitHub.

## Project Status

Backend implementation will be completed in later development tasks.
