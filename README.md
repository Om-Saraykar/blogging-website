# Blog Platform API and Frontend

This is a full-stack blogging platform that allows users to create, edit, delete blog posts, add comments, and organize posts with tags. It also includes user authentication (login/registration) and uses MongoDB as the database. The backend is built with Node.js and Express, and the frontend is built with React. The platform is deployed on Vercel.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features
- **User Authentication:** Users can register, log in, and manage their sessions.
- **Create/Edit/Delete Blog Posts:** Users can write, update, or remove their blog posts.
- **Add Comments:** Visitors can leave comments on blog posts.
- **Tags:** Blog posts can be tagged for easier categorization and searching.
- **MongoDB Integration:** All data, including users, blog posts, comments, and tags, are stored in MongoDB.
- **Responsive UI:** Frontend built with React, ensuring a user-friendly interface.
- **Deployment on Vercel:** The project is hosted and deployed via Vercel.


## Technologies Used
### Backend:
- **Node.js** with **Express.js**: Server-side handling and API creation.
- **MongoDB**: Database to store user, post, comment, and tag data.
- **Mongoose**: ODM to interact with MongoDB.
- **JWT**: For user authentication (JSON Web Tokens).
  
### Frontend:
- **React**: User interface and client-side routing.
- **Axios**: For making API requests from the frontend to the backend.

### Deployment:
- **Vercel**: For deploying the frontend and backend.


## Getting Started

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: Install MongoDB locally or use a cloud provider like MongoDB Atlas.

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Om-Saraykar/blogging-website.git
   cd blogging-website/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:
   ```bash
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend will be running on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd blog-platform/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will be running on `http://localhost:5173`.


## Deployment
The project is deployed on Vercel.


## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
