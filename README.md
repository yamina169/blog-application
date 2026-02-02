#  Tech TN 

**Tech TN** is a full-stack application for publishing and managing articles with images, favorites, and comments, and for dynamically displaying the latest news.

### Stack:

* **Frontend**: React + Vite
* **Backend**: NestJS + PostgreSQL
* **Image Storage**: MinIO (S3 compatible)
* **News API**: [NewsData.io](https://newsdata.io/) for fetching the latest news
* **Swagger UI**: for easy backend endpoint testing

---

## 🚀 Features

### Users

* Register (`register`)
* Login (`login`)
* User profile management (name, avatar, bio)

### Articles / Blogs

* Full CRUD: Create, Read, Update, Delete
* Favorites: add or remove articles from favorites
* Comments: create, update, delete
* Each article can have **an image stored on MinIO**

### News

* Fetch and display **latest news dynamically** using [NewsData.io](https://newsdata.io/)
* Display on the frontend as a list of recent articles

### Swagger UI

* **Interactive backend documentation** for testing all endpoints easily
* Accessible at: `http://localhost:3000/api`

---

## ⚙️ Environment Variables

### Backend `.env`

```env
# App
PORT=3000
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600s

# PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=tech_tn_blog

# MinIO
MINIO_ENDPOINT=http://localhost:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_BUCKET=article-images

# News API
NEWS_API_KEY=your_newsdata_api_key
```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:3000/api
```

---

## 🔧 Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
cd backend
npm install

cd ../frontend
npm install
```

3. Start the backend:

```bash
npm run start:dev
```

4. Start the frontend:

```bash
npm run dev
```

5. Access the frontend at: `http://localhost:5173`
6. Test backend endpoints with Swagger at: `http://localhost:3000/api`

---

## 🐳 Run with Docker

To run the **entire project with Docker**, use Docker Compose:

```bash
docker-compose up --build
```

* Backend: `http://localhost:3000/api` (Swagger UI available)
* Frontend: `http://localhost:5173`

---

## ⚡ Notes on Images

* Images are **only for articles**
* Stored in **MinIO**, retrievable via the API
* Max file size: 5 MB, allowed types: `jpg`, `jpeg`, `png`, `gif`
