API Endpoints
User Routes (/api/users)
POST /register
Description: Registers a new user.
Request Body:
json
{
  "email": "user@example.com",
  "password": "password123"
}
Response:
json
{
  "message": "User registered successfully",
  "token": "<JWT_TOKEN>"
}
POST /login
Description: Authenticates a user and returns a JWT token.
Request Body:
json
{
  "email": "user@example.com",
  "password": "password123"
}
Response:
json
{
  "token": "<JWT_TOKEN>"
}
Task Routes (/api/tasks)
POST /
Description: Creates a new task.
Authorization: Bearer token (JWT) in the Authorization header.
Request Body:
json
{
  "title": "Task 1",
  "description": "Description of task 1",
  "dueDate": "2025-01-30T10:00:00Z",
  "priority": "High",
  "status": "Pending"
}
Response:
json
{
  "_id": "<TASK_ID>",
  "title": "Task 1",
  "description": "Description of task 1",
  "dueDate": "2025-01-30T10:00:00Z",
  "priority": "High",
  "status": "Pending",
  "userId": "<USER_ID>"
}
GET /
Description: Retrieves all tasks for the authenticated user.
Authorization: Bearer token (JWT) in the Authorization header.
Response:
json
[
  {
    "_id": "<TASK_ID>",
    "title": "Task 1",
    "description": "Description of task 1",
    "dueDate": "2025-01-30T10:00:00Z",
    "priority": "High",
    "status": "Pending",
    "userId": "<USER_ID>"
  }
]
GET /:id
Description: Retrieves a specific task by its ID.
Authorization: Bearer token (JWT) in the Authorization header.
Response:
json
{
  "_id": "<TASK_ID>",
  "title": "Task 1",
  "description": "Description of task 1",
  "dueDate": "2025-01-30T10:00:00Z",
  "priority": "High",
  "status": "Pending",
  "userId": "<USER_ID>"
}
PUT /:id
Description: Updates a task by its ID.
Authorization: Bearer token (JWT) in the Authorization header.
Request Body:
json
{
  "title": "Updated Task 1",
  "description": "Updated description",
  "dueDate": "2025-02-10T10:00:00Z",
  "priority": "Medium",
  "status": "Completed"
}
Response:
json
{
  "_id": "<TASK_ID>",
  "title": "Updated Task 1",
  "description": "Updated description",
  "dueDate": "2025-02-10T10:00:00Z",
  "priority": "Medium",
  "status": "Completed",
  "userId": "<USER_ID>"
}
DELETE /:id
Description: Deletes a task by its ID.
Authorization: Bearer token (JWT) in the Authorization header.
Response:
json
{
  "message": "Task deleted successfully"
}
Authentication
All Task Routes (/api/tasks) require JWT authentication.
Include the JWT token in the Authorization header for all task-related requests:

Authorization: Bearer <JWT_TOKEN>
Running the Application
To start the application, run:
npm start
The app will be available at http://localhost:5000.
