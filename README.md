# Social App

## Description

**Social App** is a **monolithic application** where users can **register, login, update profiles, search users, follow/unfollow, create posts, and comment**.
The app is built using **NestJS** for the backend, **React** for the frontend, and includes **AI-powered features** for enhanced user experience.

This project was initially planned as a microservices architecture but was refactored into a **monolith** for simpler development and easier Dockerization on low-resource PCs.

## Features

- User **authentication** (login/register)
- **Profile management** (update profile, view profile)
- **Follow/unfollow users**
- **Create posts**
- **Comment on posts**
- **Search users**
- **AI-powered features** (optional enhancements)

## Getting Started

### Backend with Docker

1. Build and run the backend and MongoDB:

```bash
docker-compose up --build
```

2. Backend runs on: `http://localhost:3000`

### Frontend

1. Install dependencies:

```bash
cd social-app-frontend
npm install
```

2. Run the React app:

```bash
npm start
```

3. Frontend runs on: `http://localhost:3001` (or default React port)

## Notes

- The project uses a **monolithic architecture** for easier development on low-resource machines.
- All modules communicate internally using NestJS services.
- Later, the app can be refactored into microservices if needed.

## Technologies

- **Backend:** NestJS, MongoDB, Mongoose
- **Frontend:** React, Axios (or fetch)
- **DevOps:** Docker, Docker Compose
- **Optional:** AI-powered features (e.g., content suggestions, moderation)
