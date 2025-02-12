# Meetup & Event Finder Backend

## Overview
This is the backend for the Meetup & Event Finder application, built using Node.js, Express, and MongoDB.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/meetup-event-finder-backend.git
   cd meetup-event-finder-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add your MongoDB connection string:
   ```sh
   MONGO_URI=your_mongodb_url
   PORT=5000
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoints
- **GET /api/events** - Fetch all events
- **POST /api/events** - Create a new event
- **GET /api/events/:id** - Get an event by ID

## License
This project is licensed under the MIT License.