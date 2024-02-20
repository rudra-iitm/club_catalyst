# Club-Catalyst

## Links

- Website: https://club-catalyst.vercel.app/
- Demo-Video: https://drive.google.com/file/d/1NlSutKyRI6fwRbvqWWEgu6d0DTzbk9fO/view?usp=drive_link

## Overview

This platform is designed to streamline the approval process for events and purchases within the student gymkhana office. It facilitates a structured workflow for approval automation, request generation, and data management.

## Approval Automation

- Requests go through a predefined procedure involving club generation, secretary recommendation, club financial advisor (FA) approval, society FA recommendation, and chairSAP approval.
- Purchase requests have additional rules based on the amount, with different approval chains and monthly limits.

## Request Generation

- Clubs can submit requests with explanations and attachments.
- Requests include monetary aspects, which determine the approval chain.
- The portal supports text and attachments similar to an email.

# Run Locally

To get started with the project locally, follow the steps below:

## Clone the project

```bash
  git clone https://github.com/Rudra-IITM/club_catalyst
```

## Using Docker

If you prefer using Docker for managing the project environment, follow these instructions:

1. Navigate to the project directory:

```bash
    cd club_catalyst
```

2. Ensure that Docker is installed on your system and the Docker daemon is running.

3. Run the following command to start the project using Docker:

```bash
  docker-compose up -d # To run in detached terminal
```

## Manual Setup

Go to the project directory

```bash
  cd club_catalyst
```

### Set up backend

Go to the backend directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Setup environment variables

```bash
  # copy .env.example to .env and set desired MONGO_URI (Mongo DB connection string)
  cp .env.example .env
```

Run backend

```bash
  npm run dev
```

### Set up frontend

Go to the frontend directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Setup environment variables

```bash
  # copy .env.example to .env
  cp .env.example .env
```

Run frontend

```bash
  npm start
```

## Accessing the Application

Once the project is running, you can access the frontend application at http://localhost:3000/ and the backend at http://localhost:3001/.
