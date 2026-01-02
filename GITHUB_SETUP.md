# 🚀 Push to GitHub - Step by Step Guide

Follow these steps to push your CLI to GitHub and make it available globally!

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ng-boilerplate-cli`
3. Description: `CLI tool to generate Angular 21.0.2 boilerplate projects`
4. Make it **Public** (so others can use it with npx)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Push Your Code

Run these commands in PowerShell:

```powershell
# Navigate to the project
cd c:\Users\DevendrakumarMishra\Desktop\ng-boilerplate-cli

# Add your GitHub repository as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/ng-boilerplate-cli.git

# Rename branch to main (if not already)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Verify on GitHub

1. Go to your repository: `https://github.com/YOUR-USERNAME/ng-boilerplate-cli`
2. You should see all your files!

## Step 4: Use Your CLI from Anywhere! 🎉

Now anyone can use your CLI with a single command:

### Option A: Direct Use with npx (No Installation)
```bash
npx github:YOUR-USERNAME/ng-boilerplate-cli create my-project
```

### Option B: Install Globally
```bash
npm install -g github:YOUR-USERNAME/ng-boilerplate-cli
ng-boilerplate create my-project
```

### Option C: Install from npm (after publishing to npm)
```bash
npm install -g ng-boilerplate-cli
ng-boilerplate create my-project
```

## 📝 Example Usage

Once pushed to GitHub, anyone can create an Angular project like this:

```bash
# Replace YOUR-USERNAME with your actual GitHub username
npx github:DevendrakumarMishra/ng-boilerplate-cli create my-awesome-app

cd my-awesome-app
npm install
npm start
```

## 🌟 Bonus: Publish to npm Registry (Optional)

If you want to publish to npm so users can install with just `npm install -g ng-boilerplate-cli`:

```bash
# Login to npm (create account at https://www.npmjs.com/ first)
npm login

# Publish
npm publish
```

Then users can simply do:
```bash
npm install -g ng-boilerplate-cli
ng-boilerplate create my-project
```

## 🔧 Future Updates

When you make changes:

```bash
# Make your changes
# ...

# Commit and push
git add .
git commit -m "Your update message"
git push origin main
```

Users will automatically get the latest version when they use npx!

---

**Your CLI is ready to share with the world! 🌍**
