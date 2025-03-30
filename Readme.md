# User Profile Management Backend

A RESTful API backend for managing user profiles with authentication, built with Node.js, Express, and MongoDB.

## Overview

This backend service provides endpoints for:

- User registration and authentication
- Profile management (view, update, delete)
- JWT-based authentication

## Prerequisites

- Node.js (v18+)
- MongoDB database (local or Atlas)
- npm or yarn package manager

## Installation

1. Clone the repository or download the source code

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   TOKEN_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## Environment Variables

| Variable     | Description                 | Default    |
| ------------ | --------------------------- | ---------- |
| PORT         | Port the server will run on | 3000       |
| MONGODB_URI  | MongoDB connection string   | _required_ |
| TOKEN_SECRET | Secret key for JWT          | _required_ |

## API Endpoints

### Authentication

#### Register a new user

```
POST /api/users/signup
```

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "address": "123 Main St",
  "bio": "Software developer",
  "profilePictureUrl": "https://example.com/image.jpg"
}
```

#### Login

```
POST /api/users/login
```

**Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### User Profile

#### Get user profile

```
GET /api/users/profile
```

**Headers:**

```
Authorization: Bearer YOUR_JWT_TOKEN
```

#### Update user profile

```
PUT /api/users/profile
```

**Headers:**

```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Body:** (all fields optional)

```json
{
  "name": "John Doe",
  "address": "456 New Address",
  "bio": "Updated bio",
  "profilePictureUrl": "https://example.com/new-image.jpg"
}
```

#### Delete user profile

```
DELETE /api/users/profile
```

**Headers:**

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Usage Examples

### Register a new user

```bash
curl -X POST http://localhost:3000/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "address": "123 Main St"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get profile (authenticated)

```bash
curl -X GET http://localhost:3000/api/users/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Development

- Run in development mode with auto-reload:

  ```bash
  npm run dev
  ```

- Run in production mode:
  ```bash
  npm start
  ```

## Project Structure

```
user_profile_management_backend/
├── config/
│   └── db.js                  # Database connection
├── controllers/
│   ├── loginController.js     # Login handler
│   ├── signupController.js    # Registration handler
│   └── userController.js      # User profile operations
├── middleware/
│   └── auth.js                # JWT authentication middleware
├── models/
│   └── user.js                # User data model
├── routes/
│   └── userRoutes.js          # API routes
├── .env                       # Environment variables
├── server.js                  # Server entry point
└── package.json               # Project dependencies
```
