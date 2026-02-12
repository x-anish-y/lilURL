# 🔗 lilURL – URL Shortener Web Application

lilURL is a modern URL Shortener web application built using Next.js (App Router) and MongoDB.  
It allows users to generate short, shareable links from long URLs and automatically redirects users when the short link is accessed.

---

## 🚀 Features

- Generate unique short URLs
- Instant redirection to original link
- MongoDB database integration
- Clean and responsive UI
- About & Contact pages
- Dynamic routing using Next.js App Router
- API route for URL generation

---

## 🛠 Tech Stack

- Frontend: Next.js 14, React
- Backend: Next.js API Routes
- Database: MongoDB
- Styling: CSS
- Deployment: Vercel compatible

---

## 📂 Project Structure

lilURL/
│
├── app/
│   ├── api/generate/route.js
│   ├── [shorturl]/page.js
│   ├── about/page.js
│   ├── contact/page.js
│   └── page.js
│
├── components/
│   └── Navbar.js
│
├── lib/
│   └── mongodb.js
│
├── public/
└── package.json

---

## ⚙️ How It Works

1. User enters a long URL.
2. A unique short code is generated.
3. The URL and short code are stored in MongoDB.
4. When a user visits /shortcode, the app fetches the original URL and redirects automatically.

---

## 🔧 Installation & Setup

1. Clone the repository

   git clone https://github.com/your-username/lilURL.git  
   cd lilURL  

2. Install dependencies

   npm install  

3. Create a .env.local file in the root directory:

   MONGODB_URI=your_mongodb_connection_string

4. Run the development server

   npm run dev  

Open http://localhost:3000

---

## 📌 API Endpoint

POST /api/generate

Request Body:
{
  "url": "https://example.com"
}

Response:
{
  "shortUrl": "abc123"
}

---

## 🌍 Deployment

Deploy easily on Vercel or any Node.js hosting platform.  
Make sure to configure environment variables in the deployment dashboard.

---

## 📈 Future Improvements

- QR Code generation
- Click analytics tracking
- User authentication
- Custom short URLs
- Expiry time for links

---

## 👨‍💻 Author

Developed as a full-stack project using Next.js and MongoDB.

---

## 📜 License

This project is open-source under the MIT License.
