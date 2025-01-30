# Task Management API Documentation

## Setup
1. **Clone Repository**
   ```bash
   git clone [<repository-url>](https://github.com/rahulsharma998/Task-manage-app.git)
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Create `.env` File** with:
   ```
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```
4. **Start Server**
   ```bash
   npm start
   ```
   API runs at `http://localhost:5000`

---

## Authentication
- **Register** `POST /api/users/register`
- **Login** `POST /api/users/login`
- Include JWT token in `Authorization` header for all task-related requests:
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```

---

## Task Routes (`/api/tasks`)

### Create Task
- **POST `/`** (Requires JWT)
- **Body:**
  ```json
  {
    "title": "Task 1",
    "description": "Description of task",
    "dueDate": "2025-01-30T10:00:00Z",
    "priority": "High",
    "status": "Pending"
  }
  ```

### Get All Tasks
- **GET `/`** (Requires JWT)

### Get Task by ID
- **GET `/:id`** (Requires JWT)

### Update Task
- **PUT `/:id`** (Requires JWT)
- **Body:**
  ```json
  {
    "title": "Updated Task",
    "status": "Completed"
  }
  ```

### Delete Task
- **DELETE `/:id`** (Requires JWT)

---

## Run Application
```bash
npm start
```

Now your API is ready to use! 🚀

