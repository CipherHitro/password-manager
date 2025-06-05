# 🔐 PassMan – Responsive Password Manager Web App

**PassMan** is a secure and responsive Password Manager built with **React**, **Tailwind CSS**, and **Node.js**. It allows users to safely store and manage their website credentials (site, username/email, and password) with a clean and modern interface. The app supports password encryption, user authentication using JWT, and toast notifications for enhanced user experience and security. And now supports a complete Forgot Password flow with OTP verification.

## 🚀 Features

- ✅ Mobile-first responsive design
- 🔐 Login/Signup system with secure session handling (JWT + Cookies)
- 🧂 Passwords hashed using bcryptjs
- 🔒 Saved credentials encrypted with AES-256
- 🔁 Forgot Password feature with OTP via email (OTP valid for 10 mins & max 3 attempts)
- 📧 Email support using Nodemailer
- 📋 Copy to clipboard functionality
- 👁️ Toggle visibility of saved passwords
- 🗑️ Edit/Delete password entries
- ✨ Beautiful animated icons (Lordicon)
- 🔔 Toast notifications using React Toastify
- 🌗 Light theme with a modern UI

## 🛠️ Tech Stack

### Frontend:

- **React.js**
- **Tailwind CSS**
- **React Toastify**
- **React Router**

### Backend:

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Bcryptjs**  – for hashing user passwords
- **Crypto**  – for AES-256 encryption and decryption
- **Jsonwebtoken** – for JWT-based auth
- **Nodemailer** – for sending OTP emails

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/CipherHitro/password-manager.git
cd password-manager 
``` 

### 2. Setup Frontend

```bash
cd frontend
npm install
```

### 3. Start the frontend server

```bash
npm run dev 
```
- App will be running at http://localhost:5173/ 

### 4. Setup Backend 
- Open new ternimal and run these commands 

```bash
cd backend
npm install
```

### 5. Create a .env file in backend directory and add these things
```bash
# add your 32 bit (32 character ) secret key for encryption in **.env** file 
AES_SECRET=your_32_characters_long_secret_key

# add your secret key for JWT(json web token)
secret=anything@123

# add your mongdb URI 
MONGO_URI=mongodb://localhost:27017/password-manager

# add PORT 
PORT=2000

# add your email address
EMAIL_USER=example@gmail.com

# add your email app password
EMAIL_APP_PASSWORD=abcd pqrs wxyz mnop
```

### 6. Start the backend server

```bash
nodemon index.js
```
