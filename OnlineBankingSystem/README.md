# Online Banking System

This repository contains a full-stack online banking system with a **Spring Boot** backend and a **React** frontend.

## Folder Structure

```
OnlineBankingSystem/
├── backend/              # Spring Boot backend
└── frontend/             # React frontend
```

### Backend Setup

1. Navigate to the `backend/` directory:
   ```
   cd backend
   ```
2. Build and run the Spring Boot application:
   ```
   mvn clean package
   mvn spring-boot:run
   ```
   The backend API will be available on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the `frontend/` directory:
   ```
   cd frontend
   ```
2. Install dependencies and start the React app:
   ```
   npm install
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

### Deployment

- **Frontend**: Configured for deployment to GitHub Pages. Update the `"homepage"` in `package.json`, then run:
  ```
  npm run deploy
  ```
- **Backend**: Deploy the generated JAR to your preferred server (e.g., Heroku, AWS).

Enjoy exploring and customizing your banking system!
