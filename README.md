# 🔐 PassMan – Responsive Password Manager Web App

**PassMan** is a sleek, responsive Password Manager built with **React**, **Tailwind CSS**, and **React Toastify**. Users can securely save their website credentials (site, username and password) and access them anytime – all from a smooth and intuitive UI. It uses MongoDB, Express, and Mongoose for backend storage.

## 🚀 Features

- ✅ Responsive design (mobile-first)
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

### Backend:

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**


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

### 5. Create a .env file in backend directory
- add your 32 bit (32 character ) secret key for encryption in **.env** file 

```bash
AES_SECRET=your_32_characters_long_secret_key
```

### 6. Start the backend server

```bash
nodemon index.js
```




