# 💬 Chatbot Application

A real-time **MERN stack** chatbot 🤖 powered by **Socket.io** for instant messaging. This application ensures secure authentication, encrypted passwords, and seamless frontend-backend communication for a smooth user experience. 🚀

## ✨ Features
- 🔹 Real-time messaging with **Socket.io**
- 🔹 Secure authentication with **protected routes**
- 🔹 Encrypted passwords using **bcrypt.js** 🔑
- 🔹 Seamless frontend-backend communication with **CORS**
- 🔹 API testing with **Postman**
- 🔹 Responsive and user-friendly UI 🎨

## 🛠️ Tech Stack
- **Frontend:** React.js ⚛️, CSS 🎨
- **Backend:** Node.js, Express.js 🌐
- **Database:** MongoDB Atlas 📦, Mongoose
- **Real-time Communication:** Socket.io ⚡
- **Authentication & Security:** bcrypt.js 🔐, JWT
- **API Testing:** Postman

## 🚀 How It Works
1. **User Registration & Login** 🔐
   - Users sign up with a secure authentication process.
   - Passwords are encrypted using bcrypt.js.
2. **Real-time Chatting** 💬
   - Users can send and receive messages instantly via Socket.io.
   - Messages are stored securely in **MongoDB Atlas**.
3. **Security & Protection** 🛡️
   - Protected routes ensure only authenticated users access chat.
   - CORS handles seamless frontend-backend interaction.

## 📌 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chatbot-app.git
   cd chatbot-app
   ```

2. **Install dependencies**
   ```bash
   # For backend
   cd server
   npm install
   
   # For frontend
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the `server` directory and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application**
   ```bash
   # Start backend server
   cd server
   npm start
   
   # Start frontend
   cd ../client
   npm start
   ```

5. **Access the app**
   - Open `http://localhost:3000` in your browser.


---
🔗 **Let's connect!** [LinkedIn](https://www.linkedin.com/in/aditya-tripathi-85bb60257) | [GitHub](https://github.com/aditri1001)
