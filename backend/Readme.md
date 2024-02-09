`npm run dev` -> to start the server

1. Authentication Controller:

   Routes:

   - POST /api/auth/login: Authenticate users and generate JWT token.
   - POST /api/auth/logout: Logout user and invalidate token.
     Functionality:
   - Handle user login with username/password.
   - Validate credentials and generate JWT token for authenticated users.
   - Invalidate token on logout.

2. Request Controller:

   Routes:

   - POST /api/requests: Create a new request.
   - GET /api/requests/:id: Get details of a specific request.
   - PUT /api/requests/:id: Update an existing request.
   - DELETE /api/requests/:id: Delete a request.
     Functionality:
   - Allow users to create, view, update, and delete requests.
   - Implement validation and authorization checks for request operations.
   - Handle file uploads for request attachments.

3. Approval Controller:

   Routes:

   - GET /api/approvals: Get pending approval requests for the current user.
   - POST /api/approvals/:id/approve: Approve a request.
   - POST /api/approvals/:id/reject: Reject a request.
     Functionality:
   - Retrieve pending approval requests for the logged-in user based on their role.
   - Implement actions to approve or reject requests with appropriate validations.
   - Update request status and notify relevant stakeholders.

4. User Controller:

   Routes:

   - GET /api/users/:id: Get user details.
   - PUT /api/users/:id: Update user profile.
   - DELETE /api/users/:id: Delete user account.
     Functionality:
   - Allow users to view and update their profile information.
   - Implement functionality for administrators to manage user accounts.

5. Access Control Controller:

   Routes:

   - GET /api/access-control/roles: Get all available roles.
   - GET /api/access-control/permissions: Get permissions for a specific role.
     Functionality:
   - Provide endpoints to retrieve role information and permissions.
   - Ensure proper access control based on user roles and permissions.

6. Export Controller:

   Routes:

   - GET /api/export/requests: Export request data to a spreadsheet.
     Functionality:
   - Implement functionality to export request data to an external spreadsheet format (e.g., CSV, XLSX).
   - Allow authorized users to download request data for reporting and analysis purposes.

7. Dashboard Controller:

   Routes:

   - GET /api/dashboard: Get dashboard statistics and summaries.
     Functionality:
   - Provide endpoints to fetch statistics and summaries for the user dashboard.
   - Aggregate data related to requests, approvals, and user activities.

8. Notification Controller:

   Routes:

   - POST /api/notifications: Send notifications to users.
     Functionality:
   - Implement functionality to send notifications to relevant stakeholders about request status updates, pending approvals, etc.
   - Integrate with email or push notification services for real-time notifications.
