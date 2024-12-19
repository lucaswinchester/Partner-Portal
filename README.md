# Partner Portal README

Welcome to the RevGen Networks Partner Portal! This repository contains the documentation and resources for using the Partner Portal, a robust platform designed to streamline operations for retailers, wholesalers, and affiliates. Below, you’ll find technical details about the portal's features, setup, API usage, and more.

---

## Key Features

### 1. **Order Stock**

The Partner Portal provides a seamless stock ordering experience with:

- **RESTful API**: Access endpoints for browsing inventory, placing orders, and checking stock availability.
- **Bulk Order Support**: Upload CSV files to place large orders efficiently.
- **Webhook Notifications**: Receive updates on order status changes.

### 2. **Activate Devices**

Simplify device activation through the portal:

- **API Integration**: Endpoints for device activation and status retrieval.
- **Real-Time Feedback**: Get activation results instantly.
- **Batch Activation**: Activate multiple devices via API or CSV upload.

### 3. **Generate Affiliate Links**

Expand your reach with custom affiliate links:

- **Dynamic Link Generation**: API support for creating and managing affiliate links.
- **Analytics Integration**: Track performance using built-in or third-party analytics tools.
- **Tokenized Links**: Secure, trackable links for enhanced reliability.

### 4. **Request Support**

Access technical support and resources:

- **Support API**: Submit and manage support tickets programmatically.
- **Knowledge Base API**: Query FAQs and documentation via API endpoints.
- **Status Page**: Real-time updates on system status and incidents.

### 5. **Manage Your Team**

Centralized team management capabilities:

- **Role-Based Access Control (RBAC)**: Define roles and permissions using our RBAC API.
- **Audit Logs**: Retrieve logs of team activity for compliance and oversight.
- **User Management API**: Add, remove, and update team members programmatically.

---

## Tech Stack

This project leverages the following technologies:

- **Next.js**: React-based framework for building server-rendered applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Clerk**: Authentication and user management solution.
- **Supabase**: Backend-as-a-service providing database and authentication.
- **Drizzle ORM**: TypeScript ORM for type-safe database interactions.

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- API access credentials (available upon registration)
- A stable internet connection

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lucaswinchester/partner-portal.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your API keys and configuration details.

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## API Documentation

The Partner Portal exposes a comprehensive RESTful API for seamless integration. Full API documentation is available at [Insert API Docs URL]. Below is a quick overview:

### Authentication

- **Endpoint**: `/api/auth/login`
- **Method**: `POST`
- **Payload**:
  ```json
  {
  	"username": "example",
  	"password": "securepassword"
  }
  ```
- **Response**:
  ```json
  {
  	"token": "your-auth-token"
  }
  ```

### Stock Management

- **Get Stock**:

  - **Endpoint**: `/api/stock`
  - **Method**: `GET`

- **Place Order**:
  - **Endpoint**: `/api/orders`
  - **Method**: `POST`
  - **Payload**:
    ```json
    {
    	"items": [
    		{ "productId": "12345", "quantity": 10 },
    		{ "productId": "67890", "quantity": 5 }
    	]
    }
    ```

### Device Activation

- **Activate Device**:
  - **Endpoint**: `/api/devices/activate`
  - **Method**: `POST`
  - **Payload**:
    ```json
    {
    	"deviceIds": ["device123", "device456"]
    }
    ```

---

## Contributing

We welcome contributions to the Partner Portal! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature or fix bug"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## Support and Resources

For additional support, refer to the following:

- **API Documentation**: [Insert API Docs URL]
- **Help Center**: [Insert link to Help Center]
- **Contact Support**: [Insert contact information or link]

---

## Feedback and Suggestions

We value your input! Submit feedback via:

- Email: [Insert feedback email]
- GitHub Issues: Open an issue in this repository

---

Thank you for using the RevGen Networks Partner Portal. Together, we can achieve more!
