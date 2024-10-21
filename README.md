
# Tech Blog

## Description

The Tech Blog is a Node.js-based web application that allows users to create, read, and manage blog posts. Built using Express.js, Sequelize, and PostgreSQL, this application provides a platform for users to share their thoughts and insights on various technology topics.

## Features

- User authentication (registration and login)
- CRUD operations for blog posts
- User profiles with associated posts
- Responsive design
- Database support using PostgreSQL

## Technologies Used

- **Node.js**: JavaScript runtime for building the server
- **Express.js**: Web framework for Node.js
- **Sequelize**: ORM for managing database interactions
- **PostgreSQL**: Relational database management system
- **HTML/CSS**: Front-end markup and styling
- **JavaScript**: Client-side scripting

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tbarrios516/Module14ChallengeTechBlog.git
   cd techblog
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up your database**:

   - Ensure you have PostgreSQL installed and running.
   - Create a new database and update the database configuration in the `.env` file.

   ```env
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=localhost
   ```

4. **Run migrations**:

   To set up the database tables, run the migrations:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the application**:

   ```bash
   npm start
   ```

   The application should be running at `http://localhost:3001`.

## Usage

- Navigate to the homepage to view existing blog posts.
- Users can register for an account or log in to create new blog posts.
- Users can edit or delete their own posts.

## Deployment

This application can be deployed on platforms like Render, Heroku, or Vercel. For deployment on Render:

1. Push your code to a GitHub or GitLab repository.
2. Create a new web service on Render and connect it to your repository.
3. Configure the environment variables for your database.
4. Deployed application on Render:

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
