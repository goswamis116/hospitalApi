# hospitalApi
This is hospital API project created using Node js and Mongodb where patient and doctor add their details and manage the patients and get Reports

# Hospital API

This project implements a server-side API for managing doctors, patients, and medical reports in a hospital setting. It allows doctors to register, log in, and create medical reports for patients, and provides endpoints for retrieving patient reports and listing reports filtered by status.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- jsonwebtoken (JWT)

## Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
Certainly! Below is a basic template for a README.md file for your hospital API project:

markdown

# Hospital API

This project implements a server-side API for managing doctors, patients, and medical reports in a hospital setting. It allows doctors to register, log in, and create medical reports for patients, and provides endpoints for retrieving patient reports and listing reports filtered by status.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- jsonwebtoken (JWT)

## Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/hospital-api.git

    Install dependencies:

    bash

cd hospital-api
npm install

Set up MongoDB:

Make sure you have MongoDB installed and running on your system. You can download it from here.

Start the server:

bash

npm start 
The server will start running on http://localhost:3000 by default.

Endpoints::
Doctors:

    POST /doctors/register: Register a new doctor.
    POST /doctors/login: Log in a doctor and receive a JWT token for authentication.

Patients:

    POST /patients/register: Register a new patient.
    GET /patients/:id/all_reports: Get all reports of a patient.

Reports:

    POST /patients/:id/create_report: Create a new report for a patient.
    GET /reports/:status: List all reports filtered by status.

    Authentication:

Authentication is required for certain endpoints. When logging in, a JWT token is returned, which should be included in the request headers for authenticated routes. Use the Authorization header with the value Bearer <token>.
Contributors: Santanu Goswami
