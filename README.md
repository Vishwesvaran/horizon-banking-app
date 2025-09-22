

# Horizon – Modern Banking App

Horizon is a full-featured, secure banking application built with **Next.js**, **TypeScript**, and **Appwrite**, designed to provide a seamless experience for managing multiple bank accounts, transactions, and fund transfers. It integrates with **Plaid** and **Dwolla** for real-time banking operations and supports a clean, responsive interface powered by **TailwindCSS**, **ShadCN**, and **Chart.js**.

---

## 🚀 Tech Stack

- **Next.js** – Server-side rendering and routing  
- **TypeScript** – Type-safe development  
- **Appwrite** – Backend-as-a-service for authentication, database, and serverless functions  
- **Plaid** – Secure bank account linking and transaction retrieval  
- **Dwolla** – Funds transfer and ACH payments  
- **React Hook Form** – Efficient form management  
- **Zod** – Schema validation and type safety  
- **TailwindCSS** – Utility-first styling framework  
- **Chart.js** – Data visualization for financial insights  
- **ShadCN** – Accessible, customizable UI components  

---

## ✨ Features

- **Authentication**  
  Ultra-secure server-side rendered authentication with strong validations and granular authorization.

- **Connect Banks**  
  Integrate with **Plaid** to securely connect multiple bank accounts.

- **Home Page**  
  Displays a comprehensive overview:  
  - Total balance across connected banks  
  - Recent transactions  
  - Spending insights by category  

- **My Banks**  
  View a detailed list of all connected banks, balances, and account details.

- **Transaction History**  
  Paginated and filterable transaction history, supporting multiple accounts.

- **Real-time Updates**  
  Instantly reflects changes (e.g., new accounts or transactions) across the platform.

- **Funds Transfer**  
  Send money via **Dwolla**, with fields for recipient details and bank IDs.

- **Responsiveness**  
  Optimized for desktop, tablet, and mobile for a consistent user experience.

---

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Cloning the Repository

```bash
git clone https://github.com/adrianhajdin/banking.git
cd banking
```

### Installation

Install project dependencies:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add:

```env
# NEXT
NEXT_PUBLIC_SITE_URL=

# APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

# PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

# DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

Replace the placeholder values with credentials from **Appwrite**, **Plaid**, and **Dwolla**.

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.
