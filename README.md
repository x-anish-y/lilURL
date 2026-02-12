# 🔗 lilURL  
### A Scalable URL Shortener Web Application

lilURL is a full-stack URL shortening platform built using **Next.js (App Router)** and **MongoDB**.  
The application enables users to convert long URLs into compact, shareable links with instant redirection support.

<br>

![lilURL Architecture](public/Screenshot%202026-02-12%20231650.png)

---

## 📌 Project Overview

lilURL is designed to demonstrate:

- Full-stack development using Next.js  
- REST API implementation  
- Dynamic routing with App Router  
- Database integration with MongoDB  
- Clean and scalable project architecture  

The system efficiently maps long URLs to unique short codes and handles real-time redirection.

---

## 🚀 Core Features

- Unique short URL generation  
- Instant redirection to original link  
- Persistent MongoDB storage  
- Dynamic routing (`/[shorturl]`)  
- RESTful API endpoint for link creation  
- Responsive and minimal UI  
- Static pages (About & Contact)

---

## 🛠 Technology Stack

| Layer        | Technology Used |
|--------------|-----------------|
| Frontend     | Next.js 14, React |
| Backend      | Next.js API Routes |
| Database     | MongoDB |
| Styling      | CSS |
| Deployment   | Vercel Optimized |

---

## ⚙️ Application Workflow

1. User inputs a long URL.
2. Backend generates a unique short identifier.
3. The long URL and its short code are stored in MongoDB.
4. When a user visits `/shortcode`, the application:
   - Queries the database
   - Retrieves the original URL
   - Performs automatic redirection

This ensures efficient link mapping and scalable redirection handling.

---

## 📂 Project Structure

```
lilURL/
│
├── app/
│   ├── api/generate/route.js   # URL generation endpoint
│   ├── [shorturl]/page.js      # Dynamic redirect handler
│   ├── about/page.js
│   ├── contact/page.js
│   └── page.js                 # Home page
│
├── components/                 # Reusable UI components
├── lib/
│   └── mongodb.js              # Database connection setup
│
├── public/                     # Static assets
└── package.json
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/lilURL.git
cd lilURL
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Access the application at:

```
http://localhost:3000
```

---

## 📌 API Documentation

### ➤ Generate Short URL

**Endpoint:**  
`POST /api/generate`

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "shortUrl": "abc123"
}
```

---

## 🌍 Deployment

The application is optimized for deployment on:

- **Vercel (Recommended)**
- Any Node.js-compatible hosting platform

Ensure environment variables are configured in the hosting dashboard.

---

## 📈 Future Enhancements

- QR code generation for short URLs  
- Click tracking and analytics dashboard  
- User authentication system  
- Custom alias support  
- Link expiration and access control  
- Rate limiting and enhanced security measures  

---

## 🎯 Learning Outcomes

This project demonstrates:

- Full-stack web development using Next.js  
- MongoDB integration and CRUD operations  
- Dynamic routing and server-side redirection  
- API route design and RESTful architecture  
- Scalable web application structuring  

---

## 👨‍💻 Author

Developed as a full-stack URL shortening system using Next.js and MongoDB.

---

## 📜 License

Licensed under the MIT License.
