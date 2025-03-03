
# Elegant Authentication API

A beautifully designed REST API with user registration and authentication, delivering JWT tokens with a clean, minimalist approach.

## Project Overview

This project provides a simple yet powerful authentication system with a modern user interface. The API is designed for simplicity and functionality, offering everything you need for user authentication.

## Features

- **User Registration**: Securely register new users with name, email, and password
- **JWT Authentication**: Generate secure JWT tokens upon successful authentication
- **MySQL Storage**: Reliable database integration for storing user details securely
- **Modern UI**: Clean, responsive interface for interacting with the API
- **Comprehensive Documentation**: Detailed API documentation with examples

## API Endpoints

### User Registration
```
POST /register

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password"
}

Response:
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### User Login
```
POST /login

Request Body:
{
  "email": "john@example.com",
  "password": "secure_password"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <PROJECT_DIRECTORY>

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment

This project can be easily deployed on platforms like Render:

1. Connect your GitHub repository
2. Configure the build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy as a static site

## Technologies Used

- TypeScript
- React
- Tailwind CSS
- React Router
- Tanstack Query
- Shadcn UI
