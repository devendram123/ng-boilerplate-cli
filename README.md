# Angular Boilerplate CLI

A powerful CLI tool to generate production-ready Angular 21.0.2 applications with **Collateral Gap** architecture - featuring role-based authentication, Atomic Design, and Angular Material!

## 🚀 Quick Start

### Option 1: Use Directly from GitHub (No Installation Required) ⚡

```bash
# Create a new Angular project using npx
npx github:devendram123/ng-boilerplate-cli create my-angular-app
```

### Option 2: Install Globally from GitHub

```bash
# Install globally from GitHub
npm install -g https://github.com/devendram123/ng-boilerplate-cli.git

# Now use it anywhere
ng-boilerplate create my-angular-app
```

### Option 3: Install Locally (For Development)

```bash
# Clone the repository
git clone https://github.com/devendram123/ng-boilerplate-cli.git
cd ng-boilerplate-cli

# Install dependencies
npm install

# Link the CLI globally
npm link
```

### Usage

```bash
# Create a new Angular project
ng-boilerplate create my-angular-app

# Navigate to your project
cd my-angular-app

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm start
```

## ✨ Features

### 🏗️ Architecture
- **Atomic Design Pattern** - Atoms, Molecules, Organisms, Pages
- **MVC Layers** - Core, UI, Pages, Shared
- **Clean Separation** - Models, Services, Guards, Components

### 🔐 Authentication & Authorization
- Role-based authentication system (Admin & User)
- Tab-based login with role selection
- JWT-like token management
- Signal-based state management
- Route guards with role-based access control

### 🎨 UI Components
- **Atoms**: Button, Input, Card
- **Molecules**: Sidebar, Tabs, Login Form
- **Organisms**: Dashboard Layout, Auth Layout
- **Pages**: Login, Dashboard, User, Admin

### 📱 Modern Stack
- 🎯 **Angular 21.0.2** - Latest version
- 📦 **Angular Material** - Pre-configured Material Design
- 🎨 **SCSS** - Design tokens and variables
- ⚡ **Signals** - Modern reactive state management
- 🔄 **Standalone Components** - No NgModules
- 🌐 **Router** - Lazy-loaded routes with guards
- 📝 **TypeScript** - Strict mode enabled

### 🎯 Production Ready
- Organized folder structure
- Responsive layouts
- Role-based navigation
- Design system with tokens
- No inline HTML/CSS
- BEM naming convention

## 📁 Generated Project Structure

```
my-angular-app/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/          # User, Auth models
│   │   │   ├── services/        # AuthService
│   │   │   └── guards/          # AuthGuard, RoleGuard
│   │   ├── ui/
│   │   │   ├── atoms/           # Button, Input, Card
│   │   │   ├── molecules/       # Sidebar, Tabs, LoginForm
│   │   │   └── organisms/       # DashboardLayout, AuthLayout
│   │   ├── pages/
│   │   │   ├── login/           # Login page
│   │   │   ├── dashboard/       # Dashboard page
│   │   │   ├── user/            # User profile page
│   │   │   └── admin/           # Admin panel (Admin only)
│   │   ├── shared/
│   │   │   ├── constants/       # Roles, Routes
│   │   │   ├── directives/      # Custom directives
│   │   │   ├── pipes/           # Custom pipes
│   │   │   └── utils/           # Helper functions
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   ├── images/
│   │   └── styles/              # Design tokens (_variables.scss)
│   ├── environments/            # Environment configurations
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 What's Included

### Core Layer
- **Models**: User, AuthState interfaces
- **Services**: AuthService with Signal-based state management
- **Guards**: AuthGuard, RoleGuard for route protection

### UI Layer (Atomic Design)
- **Atoms**: Reusable button, input, card components
- **Molecules**: Sidebar with role-based navigation, Tabs, LoginForm
- **Organisms**: Dashboard and Auth layouts

### Pages
- **Login**: Tab-based role selection (Admin/User)
- **Dashboard**: Stats, activity feed
- **User**: Profile page (accessible by all authenticated users)
- **Admin**: Admin panel (Admin role only)

### Dependencies
- @angular/animations, common, compiler, core, forms
- @angular/material & @angular/cdk
- @angular/platform-browser & platform-browser-dynamic
- @angular/router
- rxjs, tslib, zone.js

### Dev Dependencies
- @angular-devkit/build-angular
- @angular/cli & compiler-cli
- TypeScript 5.7.2
- Karma & Jasmine (for testing)

## 🔐 Demo Login Credentials

**Admin Account:**
- Username: `admin`
- Password: `admin123`
- Access: Dashboard, User, Admin

**User Account:**
- Username: `user`
- Password: `user123`
- Access: Dashboard, User

## 📖 Commands

```bash
# Create new project
ng-boilerplate create <project-name>

# Show help
ng-boilerplate --help

# Show version
ng-boilerplate --version
```

## 💡 Example

```bash
# Using npx (no installation needed)
npx github:devendram123/ng-boilerplate-cli create my-awesome-app

# Or if installed globally
ng-boilerplate create my-awesome-app

# Output:
# 🚀 Creating Angular 21.0.2 Boilerplate Project...
# ✓ Project directory created
# ✓ Folder structure created (Atomic Design + MVC)
# ✓ Project files created
# ✓ Dependencies installed
# ✅ Project created successfully!
#
# To get started:
#   cd my-awesome-app
#   npm install --legacy-peer-deps    # Install project dependencies
#   npm start                          # Start dev server
```

## 🎨 Design Tokens

The project includes a comprehensive design system with SCSS variables:

```scss
// Colors
$primary-color: #1976d2;
$accent-color: #ff4081;

// Spacing
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;

// Typography
$font-family-base: 'Roboto', sans-serif;
$font-size-base: 16px;
```

Located in: `src/assets/styles/_variables.scss`

## 📤 Publishing to GitHub

```bash
# 1. Create a new repository on GitHub named "ng-boilerplate-cli"

# 2. Add remote and push
git remote add origin https://github.com/YOUR-USERNAME/ng-boilerplate-cli.git
git branch -M main
git push -u origin main
```

## 🛠️ Development

To contribute or modify the CLI:

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/ng-boilerplate-cli.git
cd ng-boilerplate-cli

# Install dependencies
npm install

# Link for local testing
npm link

# Make changes and test
ng-boilerplate create test-app
```

## 📝 License

MIT

## 👤 Author

Your Name

---

**Happy Coding! 💻**
