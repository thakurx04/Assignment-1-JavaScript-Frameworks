# Portfolio API – Assignment 1

This project is a REST-style Portfolio API built using Node.js and Express.
It provides JSON endpoints for profile information, about details, projects,
and allows users to submit contact messages.

This project was created as part of Assignment 1 for JavaScript Frameworks
at George Brown College.

---

## How to Run Locally

1. Install dependencies:
   npm install

2. Start the server:
   npm run dev

3. The server will run on:
   http://localhost:3000

---

## API Endpoints

### GET /api/profile
Returns basic profile information.

### GET /api/about
Returns about-me information.

### GET /api/projects
Returns a list of projects.

### POST /api/contact
Accepts a contact message.

Example request (PowerShell):

Invoke-RestMethod `
-Uri http://localhost:3000/api/contact `
-Method POST `
-ContentType "application/json" `
-Body '{"name":"Sirat Thakur","email":"sirat@email.com","message":"Hello"}'

---

## Technologies Used
- Node.js
- Express
- JavaScript

---

## Author
Sirat Thakur  
Computer Programming Student  
George Brown College
