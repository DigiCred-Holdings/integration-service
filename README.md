# NestJS PostgreSQL Setup

This project demonstrates how to set up a NestJS application with a PostgreSQL database using Docker.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Docker

## Setup Instructions

### Database Setup Script

The `prerequisites.sh` script is used to set up the PostgreSQL database in a Docker container.

a. Make the script executable:

```bash
chmod +x prerequisites.sh
```

b. Run the script independently:

```bash
./prerequisites.sh
```

### 1. Set up environment variables

Create a `.env` file in the project root with the following content:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database_name
```

### 5. Integrating with NestJS

The `package.json` file includes scripts to run the database setup and start the NestJS application:

- To set up the database: `npm run setup:db`
- To start the NestJS application: `npm run start`
- To set up the database and start the application: `npm run start:with-db`

### 6. Database Connection in NestJS

The project uses TypeORM for database connections. Ensure you have installed the required packages:

```bash
npm install @nestjs/typeorm typeorm pg
```

## Project Structure

- `src/database/database.module.ts`: Contains the database connection configuration
- `src/app.module.ts`: The main application module
- `src/users/user.entity.ts`: Entity for the 'users' table
- `src/verification/verification.entity.ts`: Entity for the 'verification' table

## Running the Application

1. Ensure Docker is running on your machine.
2. Set up the database:
   ```bash
   npm run setup:db
   ```
3. Start the NestJS application:
   ```bash
   npm run start
   ```

Alternatively, you can do both steps with a single command:

```bash
npm run start:with-db
```

## Development

For development, you can use:

```bash
npm run start:dev
```

This will start the application in watch mode, restarting on file changes.
