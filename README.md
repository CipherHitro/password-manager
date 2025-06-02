# 🔐 PassMan – Responsive Password Manager Web App

**PassMan** is a secure and responsive Password Manager built with **React**, **Tailwind CSS**, and **Node.js**. It allows users to safely store and manage their website credentials (site, username/email, and password) with a clean and modern interface. The app supports password encryption, user authentication using JWT, and toast notifications for enhanced user experience and security.

## 🚀 Features

- ✅ Responsive design (mobile-first)
- 🔐 User Authentication System (Sign up / Login)
- 🧂 Password Hashing with **bcryptjs** for user credentials
- 🔒 **AES-256** Encryption for saving passwords in the database
- 💾 Store website, username/email, and password securely
- ✨ Interactive animated icons using Lordicon
- ⚙️ Backend with Express.js & MongoDB (Mongoose)
- 📋 One-click copy to clipboard
- 👁️ Toggle password visibility
- 🗑️ Edit/Delete saved passwords
- 🔔 Toast notifications using React Toastify
- 🎨 Beautiful animated icons via Lordicon
- 🌙 Light theme with a modern layout

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
- **bcryptjs**  – for hashing user passwords
- **crypto**  – for AES-256 encryption and decryption

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
- add your 32 bit (32 character ) secret key for encryption in **.env** file 

```bash
AES_SECRET=your_32_characters_long_secret_key
```
- add your secret key for JWT(json web token)
```bash
secret=anything@123
```
- add your mongdb URI 
```bash
MONGO_URI=mongodb://localhost:27017/password-manager
```

### 6. Start the backend server

```bash
nodemon index.js
```




