# Simple Feedback Management System

## Overview

This project implements a simple Feedback Management System, consisting of a frontend and backend. The frontend allows users to submit feedback, while the backend stores and retrieves feedback entries.

## Technologies Used

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js with Express and TypeScript
- **Database**: In-memory storage (no external database used)
- **Styling**: CSS for basic styling

## Features

- **Submit Feedback**: Users can submit their name and feedback through a form.
- **Display Feedback**: All feedback entries are displayed in a list.
- **Instant Update**: The feedback list updates instantly after submission without requiring a page refresh.
- **Alert**: An alert is shown to the user upon successful submission of feedback.

## Approach

### Frontend

- **Components**: Created separate components for the form (`FeedbackForm`) and the feedback list (`FeedbackList`).
- **State Management**: Used React hooks (`useState`, `useEffect`) for managing state and side effects.
- **HTTP Requests**: Utilized Axios for making HTTP requests to the backend API.
- **Styling**: Used CSS for basic styling, focusing on simplicity and readability.

### Backend

- **Server Setup**: Set up a Node.js server using Express to handle API requests.
- **API Endpoints**: Created REST API endpoints for retrieving all feedback entries and submitting new feedback.
- **Data Handling**: Used an in-memory data structure (array) to store feedback entries.
- **Middleware**: Implemented CORS middleware for cross-origin resource sharing.

### Communication

- **Frontend-Backend Interaction**: Used `fetch` and Axios for communicating between the frontend and backend.
- **Real-Time Updates**: Implemented instant updates by refreshing the feedback list after successful submission.

## Future Improvements

- **Data Persistence**: Implementing a database for storing feedback entries to persist data between sessions.
- **Authentication**: Adding user authentication to ensure only authenticated users can submit feedback.
- **Pagination**: Implementing pagination for the feedback list to handle a large number of entries.

### Instructions

- **cd backend**
- npm install
- npx ts-node-dev src/index.ts

- **cd frontend**
- npm install
- npm start
