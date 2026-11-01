# Emergency Relief Coordination System

## Overview

The Emergency Relief Coordination System is a web-based disaster response platform designed to help emergency coordinators manage relief requests and automatically match shelters with available resources.

The system stores emergency requests and shelter resources in a PostgreSQL database and uses an automated matching engine to allocate the most suitable shelter based on availability and capacity.

---

# Problem Statement

During emergencies and natural disasters, relief coordinators must process large numbers of requests while effectively managing limited resources.

This system simplifies that process by:

- Collecting emergency shelter requests
- Managing available shelter resources
- Automatically matching requests with suitable shelters
- Providing a centralized coordination platform

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript

### Frontend Features

- Emergency request submission form
- Modern glassmorphism user interface
- Responsive design
- Dynamic shelter type selection
- Urgency level selection (1–10)

---

## Backend

- Node.js
- Express.js

### Backend Features

- REST API architecture
- Request management
- Resource management
- Matching engine
- Modular MVC structure

---

## Database

- PostgreSQL
- pgAdmin

### Database Tables

#### Requests

Stores emergency requests:

- requester_name
- location
- people_count
- urgency_level
- shelter_type_needed

#### Resources

Stores available shelter resources:

- location
- type
- capacity
- available_beds
- available_food_kits
- status

---

# System Architecture

The project follows the MVC architecture pattern.

## Models

Responsible for database operations.

Examples:

- requestsModel.js
- resourceModel.js

## Controllers

Responsible for handling business logic.

Examples:

- requestsController.js
- resourceController.js
- matchController.js

## Routes

Responsible for API endpoints.

Examples:

- requestsRoutes.js
- resourceRoutes.js
- matchRoutes.js

## Services

Responsible for advanced logic.

Examples:

- matchingService.js

---

# Main Features

## Request Management

Users can:

- Create requests
- View requests
- Update requests
- Delete requests

### Endpoints

```http
POST /api/requests
GET /api/requests
GET /api/requests/:id
PUT /api/requests/:id
DELETE /api/requests/:id
```

---

## Resource Management

Users can:

- Create resources
- View resources
- Update resources
- Delete resources

### Endpoints

```http
POST /api/resources
GET /api/resources
GET /api/resources/:id
PUT /api/resources/:id
DELETE /api/resources/:id
```

---

## Automated Matching Engine

The matching engine automatically:

1. Retrieves a request.
2. Retrieves available resources.
3. Checks shelter availability.
4. Compares bed capacity against people count.
5. Selects the best available shelter.
6. Returns the recommended resource.

### Endpoint

```http
POST /api/match/:requestId
```

---

# Project Structure

```text
backend/
│
├── app.js
│
└── src/
    ├── config/
    │   └── db.js
    │
    ├── controllers/
    │   ├── requestsController.js
    │   ├── resourceController.js
    │   └── matchController.js
    │
    ├── models/
    │   ├── requestsModel.js
    │   └── resourceModel.js
    │
    ├── routes/
    │   ├── requestsRoutes.js
    │   ├── resourceRoutes.js
    │   └── matchRoutes.js
    │
    └── services/
        └── matchingService.js

frontend/
│
├── index.html
├── style.css
├── script.js
└── mountain.png
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Install Dependencies

```bash
npm install
```

## Start PostgreSQL

Ensure PostgreSQL is running and the required tables have been created.

## Run Backend

```bash
node app.js
```

Server should start on:

```text
http://localhost:3000
```

## Run Frontend

Open:

```text
frontend/index.html
```

or use VS Code Live Server.

---
