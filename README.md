# 🔐 LOGIN RESTRICTION AND ADMIN PORTAL

This project demonstrates a **role-based authentication system** built with **Laravel 12**, **Fortify**, and **Inertia (React)**.  
It includes **user and admin dashboards**, protected with a custom **Role Middleware**.

---

## 📋 Features
- 🚀 Laravel 12 with Docker (via Sail)
- 🔑 Authentication with Fortify
- 👥 Single `users` table with `role` enum (`user`, `admin`)
- 🛡 Custom `RoleMiddleware` for access control
- 🎨 Inertia React frontend
- 📦 Easy to run with Sail (Docker-based dev environment)

---

## ⚙️ Requirements
- [Docker](https://www.docker.com/) & Docker Compose
- PHP >= 8.2 (only needed if running outside Sail)
- Node.js & npm (for frontend build)

---

## 🛠 Setup Instructions

### Clone the repository:

```bash
git clone <repo-url> project
cd project


# Install PHP dependencies
composer install

# Install JS dependencies
npm install
```

### Copy the example environment:
```bash
cp .env.example .env
```

### Generate app key:
```bash
./vendor/bin/sail artisan key:generate
```

### Start the containers:
```bash
./vendor/bin/sail up -d
```

### Run migrations and seed database with test data
```bash
./vendor/bin/sail artisan migrate --seed
```

### Build frontend assets:
```bash
npm run build
```


## Authentication
This project uses Laravel Fortify for authentication and an enum role column on the users table.

Available roles:

- user (default)
- admin

When a user logs in, they are redirected to their respective dashboard:

- `/dashboard` - User dashboard

- `/admin/dashboard` - Admin dashboard

### Test Users
Some user/admin accounts are already created when database is seeded
- User account
    - **Username:** user
    - **Password:** user
- Admin account
    - **Username:** admin
    - **Password:** admin

- To seed the database run (if have not already run before)
```
./vendor/bin/sail artisan db:seed
```
