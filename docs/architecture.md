# SWYNEX Task Manager — Project Architecture

**Internship:** SWYNEX Technologies — Full Stack Developer Internship  
**Task:** Task 1 — Project Architecture  
**Project:** SWYNEX Task Manager

---

## 1. Project Overview

SWYNEX Task Manager is a full-stack web application designed to help users organize and track their daily tasks.

Users will be able to register, log in, create tasks, update tasks, mark tasks as completed, and delete tasks.

---

## 2. Problem Statement

People often manage tasks using notebooks, messages, or multiple applications. This can make it difficult to organize work and track deadlines.

The SWYNEX Task Manager will provide a centralized platform where users can create, organize, and track their tasks in one place.

---

## 3. Project Objectives

The main objectives of this project are:

- Create a simple and user-friendly task management application.
- Allow users to securely manage their own tasks.
- Connect a frontend application with a backend REST API.
- Store application data in a database.
- Understand how frontend, backend, API, and database components work together.
- Follow a clear and maintainable full-stack architecture.

---

## 4. Core Features

The planned application will include the following features:

### User Features

- User registration
- User login
- User logout
- Secure authentication

### Task Features

- Create a task
- View tasks
- View individual task details
- Update a task
- Delete a task
- Mark a task as completed
- Set task priority
- Set a due date
- Filter tasks by status
- Filter tasks by priority

---

## 5. Technology Stack

### Frontend

- React.js
- JavaScript
- HTML
- CSS
- Axios

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Authentication

- JSON Web Token (JWT)
- Password hashing

### Development Tools

- Git
- GitHub
- Visual Studio Code
- Postman

---

## 6. System Architecture

The application will follow a three-layer architecture.

```text
                    USER
                      |
                      v
             +----------------+
             | React Frontend |
             +----------------+
                      |
                  REST API
                      |
                      v
             +----------------+
             | Node + Express |
             |    Backend     |
             +----------------+
                      |
                      v
             +----------------+
             |    MongoDB     |
             |    Database    |
             +----------------+
