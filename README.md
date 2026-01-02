# Angular Boilerplate CLI

A powerful CLI tool to generate Angular 21.0.2 boilerplate projects with a single command!

## 🚀 Quick Start

### Option 1: Use Directly from GitHub (No Installation Required) ⚡

```bash
# Create a new Angular project using npx
npx github:YOUR-USERNAME/ng-boilerplate-cli create my-angular-app
```

### Option 2: Install Globally from GitHub

```bash
# Install globally from GitHub
npm install -g github:YOUR-USERNAME/ng-boilerplate-cli

# Now use it anywhere
ng-boilerplate create my-angular-app
```

### Option 3: Install Locally (For Development)

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/ng-boilerplate-cli.git
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

# Start the development server
npm start
```

## ✨ Features

- 🎯 **Angular 21.0.2** - Latest Angular version
- 📦 **All Dependencies Included** - Complete setup with all required packages
- 🗂️ **Organized Structure** - Pre-configured folder structure for components, services, models, guards, and interceptors
- 🎨 **Styled Template** - Beautiful landing page included
- ⚡ **Standalone Components** - Modern Angular architecture
- 🔄 **Routing Ready** - Router configuration included
- 🌐 **HTTP Client** - Pre-configured HTTP client
- 🔧 **Environment Files** - Development and production environment setup
- 📝 **TypeScript Configured** - Strict mode enabled with best practices

## 📁 Generated Project Structure

```
my-angular-app/
├── src/
│   ├── app/
│   │   ├── components/        # Your components go here
│   │   ├── services/          # Your services go here
│   │   ├── models/            # Your models/interfaces go here
│   │   ├── guards/            # Your route guards go here
│   │   ├── interceptors/      # Your HTTP interceptors go here
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/                # Static assets
│   ├── environments/          # Environment configurations
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 What's Included

### Dependencies
- @angular/animations
- @angular/common
- @angular/compiler
- @angular/core
- @angular/forms
- @angular/platform-browser
- @angular/platform-browser-dynamic
- @angular/router
- rxjs
- tslib
- zone.js

### Dev Dependencies
- @angular-devkit/build-angular
- @angular/cli
- @angular/compiler-cli
- TypeScript
- Karma & Jasmine (for testing)

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
npx github:YOUR-USERNAME/ng-boilerplate-cli create my-awesome-app

# Or if installed globally
ng-boilerplate create my-awesome-app

# Output:
# 🚀 Creating Angular 21.0.2 Boilerplate Project...
# ✓ Project directory created
# ✓ Folder structure created
# ✓ Project files created
# ✓ Dependencies installed
# ✅ Project created successfully!
#
# To get started:
#   cd my-awesome-app
#   npm install    # Install project dependencies
#   npm start      # Start dev server
```

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
