
# Club-Catalyst

## Links
- Website: https://club-catalyst.vercel.app/
- Demo-Video: https://youtu.be/A_pl0w8m5-Y?feature=shared

## Overview
This platform is designed to streamline the approval process for events and purchases within the student gymkhana office. It facilitates a structured workflow for approval automation, request generation, and data management.

## Approval Automation
- Requests go through a predefined procedure involving club generation, secretary recommendation, club financial advisor (FA) approval, society FA recommendation, and chairSAP approval.
- Purchase requests have additional rules based on the amount, with different approval chains and monthly limits.

## Request Generation
- Clubs can submit requests with explanations and attachments.
- Requests include monetary aspects, which determine the approval chain.
- The portal supports text and attachments similar to an email.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Rudra-IITM/club_catalyst
```

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
copy env.example to .env and set desired MONGO_URI (Mongo DB connection string)

Run backend

```bash
  npm run dev
```

This is start backend at PORT 3001 @ http://localhost:3001/

### Set up frontend
Go to the frontend directory
```bash
  cd frontend
```
Install dependencies
```bash
  npm install
```

Run frontend

```bash
  npm start
```

This is start frontend at PORT 3000 @ http://localhost:3000/

