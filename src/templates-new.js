// ============================================
// PACKAGE.JSON & CONFIG FILES
// ============================================

function packageJson(projectName) {
  return JSON.stringify({
    "name": projectName,
    "version": "0.0.0",
    "scripts": {
      "ng": "ng",
      "start": "ng serve",
      "build": "ng build",
      "watch": "ng build --watch --configuration development",
      "test": "ng test"
    },
    "private": true,
    "dependencies": {
      "@angular/animations": "^21.0.2",
      "@angular/common": "^21.0.2",
      "@angular/compiler": "^21.0.2",
      "@angular/core": "^21.0.2",
      "@angular/forms": "^21.0.2",
      "@angular/material": "^21.0.2",
      "@angular/cdk": "^21.0.2",
      "@angular/platform-browser": "^21.0.2",
      "@angular/platform-browser-dynamic": "^21.0.2",
      "@angular/router": "^21.0.2",
      "rxjs": "~7.8.0",
      "tslib": "^2.3.0",
      "zone.js": "~0.15.0"
    },
    "devDependencies": {
      "@angular-devkit/build-angular": "^21.0.2",
      "@angular/cli": "^21.0.2",
      "@angular/compiler-cli": "^21.0.2",
      "@types/jasmine": "~5.1.0",
      "jasmine-core": "~5.4.0",
      "karma": "~6.4.0",
      "karma-chrome-launcher": "~3.2.0",
      "karma-coverage": "~2.2.0",
      "karma-jasmine": "~5.1.0",
      "karma-jasmine-html-reporter": "~2.1.0",
      "typescript": "~5.6.3"
    }
  }, null, 2);
}

function angularJson(projectName) {
  return JSON.stringify({
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
      [projectName]: {
        "projectType": "application",
        "schematics": {
          "@schematics/angular:component": {
            "style": "scss"
          }
        },
        "root": "",
        "sourceRoot": "src",
        "prefix": "app",
        "architect": {
          "build": {
            "builder": "@angular-devkit/build-angular:application",
            "options": {
              "outputPath": "dist/" + projectName,
              "index": "src/index.html",
              "browser": "src/main.ts",
              "polyfills": [
                "zone.js"
              ],
              "tsConfig": "tsconfig.app.json",
              "inlineStyleLanguage": "scss",
              "assets": [
                {
                  "glob": "**/*",
                  "input": "src/assets",
                  "output": "/assets"
                }
              ],
              "styles": [
                "@angular/material/prebuilt-themes/indigo-pink.css",
                "src/styles.scss"
              ],
              "scripts": []
            },
            "configurations": {
              "production": {
                "budgets": [
                  {
                    "type": "initial",
                    "maximumWarning": "500kB",
                    "maximumError": "1MB"
                  },
                  {
                    "type": "anyComponentStyle",
                    "maximumWarning": "2kB",
                    "maximumError": "4kB"
                  }
                ],
                "outputHashing": "all"
              },
              "development": {
                "optimization": false,
                "extractLicenses": false,
                "sourceMap": true
              }
            },
            "defaultConfiguration": "production"
          },
          "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "configurations": {
              "production": {
                "buildTarget": projectName + ":build:production"
              },
              "development": {
                "buildTarget": projectName + ":build:development"
              }
            },
            "defaultConfiguration": "development"
          },
          "extract-i18n": {
            "builder": "@angular-devkit/build-angular:extract-i18n"
          },
          "test": {
            "builder": "@angular-devkit/build-angular:karma",
            "options": {
              "polyfills": [
                "zone.js",
                "zone.js/testing"
              ],
              "tsConfig": "tsconfig.spec.json",
              "inlineStyleLanguage": "scss",
              "assets": [
                {
                  "glob": "**/*",
                  "input": "src/assets",
                  "output": "/assets"
                }
              ],
              "styles": [
                "@angular/material/prebuilt-themes/indigo-pink.css",
                "src/styles.scss"
              ],
              "scripts": []
            }
          }
        }
      }
    }
  }, null, 2);
}

function tsConfig() {
  return JSON.stringify({
    "compileOnSave": false,
    "compilerOptions": {
      "outDir": "./dist/out-tsc",
      "strict": true,
      "noImplicitOverride": true,
      "noPropertyAccessFromIndexSignature": true,
      "noImplicitReturns": true,
      "noFallthroughCasesInSwitch": true,
      "skipLibCheck": true,
      "isolatedModules": true,
      "esModuleInterop": true,
      "sourceMap": true,
      "declaration": false,
      "experimentalDecorators": true,
      "moduleResolution": "bundler",
      "importHelpers": true,
      "target": "ES2022",
      "module": "ES2022",
      "lib": [
        "ES2022",
        "dom"
      ]
    },
    "angularCompilerOptions": {
      "enableI18nLegacyMessageIdFormat": false,
      "strictInjectionParameters": true,
      "strictInputAccessModifiers": true,
      "strictTemplates": true
    }
  }, null, 2);
}

function tsConfigApp() {
  return JSON.stringify({
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "outDir": "./out-tsc/app",
      "types": []
    },
    "files": [
      "src/main.ts"
    ],
    "include": [
      "src/**/*.d.ts"
    ]
  }, null, 2);
}

function gitignore() {
  return `.DS_Store
node_modules
/dist
/tmp
/out-tsc
/bazel-out

# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# Visual Studio Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings

# System files
.DS_Store
Thumbs.db
`;
}

function readme(projectName) {
  return `# ${projectName}

Production-ready Angular 21.0.2 application with role-based authentication.

## Architecture

**Atomic Design + MVC**
- Atoms: Button, Input, Card
- Molecules: Sidebar, Tabs, LoginForm
- Organisms: DashboardLayout, AuthLayout
- Pages: Login, Dashboard, User, Admin

**Layers:**
- Core: Authentication, Guards, Services, Models
- UI: Reusable presentation components
- Pages: Route-level screens
- Shared: Directives, Pipes, Utilities, Constants

## Features

✅ Role-based authentication (Admin / User)
✅ Route guards with role authorization
✅ Dynamic sidebar navigation
✅ Angular Material UI
✅ Signal-based state management
✅ Atomic Design architecture
✅ SCSS with design tokens
✅ Production-ready structure

## Development Server

\`\`\`bash
npm start
\`\`\`

Navigate to \`http://localhost:4200/\`

## Login Credentials

**Admin:**
- Username: admin
- Password: admin123

**User:**
- Username: user
- Password: user123

## Build

\`\`\`bash
npm run build
\`\`\`

Build artifacts will be stored in the \`dist/\` directory.

## Project Structure

\`\`\`
src/app/
├── core/
│   ├── models/          # Domain models
│   ├── services/        # Business logic
│   └── guards/          # Route protection
├── ui/
│   ├── atoms/           # Basic UI elements
│   ├── molecules/       # Composite components
│   └── organisms/       # Complex layouts
├── pages/               # Route-level pages
└── shared/              # Shared utilities
\`\`\`

## Technologies

- Angular 21.0.2
- TypeScript 5.6.3
- Angular Material
- SCSS
- RxJS
- Signal-based state management
`;
}

function indexHtml(projectName) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${projectName}</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
`;
}

function mainTs() {
  return `import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
`;
}

function stylesScss() {
  return `@import './assets/styles/variables';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  margin: 0;
  font-family: $font-family-base;
  line-height: 1.6;
  color: $text-color;
  background-color: $background-color;
}
`;
}

function designTokens() {
  return `// Design Tokens - Collateral Gap

// Colors
$primary-color: #1976d2;
$accent-color: #ff4081;
$success-color: #4caf50;
$warning-color: #ff9800;
$error-color: #f44336;

// Grays
$gray-50: #fafafa;
$gray-100: #f5f5f5;
$gray-200: #eeeeee;
$gray-300: #e0e0e0;
$gray-400: #bdbdbd;
$gray-500: #9e9e9e;
$gray-600: #757575;
$gray-700: #616161;
$gray-800: #424242;
$gray-900: #212121;

// Text
$text-color: $gray-900;
$text-secondary: $gray-600;
$text-disabled: $gray-400;

// Background
$background-color: #ffffff;
$background-secondary: $gray-50;

// Spacing
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-xxl: 48px;

// Typography
$font-family-base: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 18px;
$font-size-xl: 20px;
$font-size-xxl: 24px;

// Border
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;
$border-color: $gray-300;

// Shadows
$shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);

// Transitions
$transition-fast: 150ms ease-in-out;
$transition-base: 300ms ease-in-out;
$transition-slow: 500ms ease-in-out;

// Layout
$sidebar-width: 240px;
$header-height: 64px;
`;
}

// ============================================
// APP ROOT FILES
// ============================================

function appConfig() {
  return `import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync()
  ]
};
`;
}

function appComponent() {
  return `import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Collateral Gap Application';
}
`;
}

function appComponentHtml() {
  return `<router-outlet />`;
}

function appComponentScss() {
  return `// Root component styles
:host {
  display: block;
  height: 100%;
}
`;
}

function appRoutes() {
  return `import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { UserRole } from './shared/constants/roles';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadComponent: () => import('./pages/user/user.component').then(m => m.UserComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: [UserRole.ADMIN] }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
`;
}

// ============================================
// CORE - MODELS
// ============================================

function userModel() {
  return `export interface User {
  id: string;
  username: string;
  email?: string;
  role: 'admin' | 'user';
  displayName?: string;
}
`;
}

function authModel() {
  return `import { User } from './user.model';

export interface LoginRequest {
  username: string;
  password: string;
  role: 'admin' | 'user';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}
`;
}

function modelsIndex() {
  return `export * from './user.model';
export * from './auth.model';
`;
}

// ============================================
// CORE - SERVICES
// ============================================

function authService() {
  return `import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginRequest, AuthState } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'auth_state';
  
  // Signal-based state management
  private authState = signal<AuthState>(this.loadAuthState());
  
  // Exposed read-only signals
  readonly user = signal<User | null>(this.authState().user);
  readonly isAuthenticated = signal<boolean>(this.authState().isAuthenticated);

  constructor(private router: Router) {
    this.syncSignals();
  }

  login(credentials: LoginRequest): boolean {
    // Mock authentication logic
    const mockUsers = [
      { username: 'admin', password: 'admin123', role: 'admin', id: '1', displayName: 'Admin User' },
      { username: 'user', password: 'user123', role: 'user', id: '2', displayName: 'Regular User' }
    ];

    const user = mockUsers.find(
      u => u.username === credentials.username && 
           u.password === credentials.password &&
           u.role === credentials.role
    );

    if (user) {
      const authUser: User = {
        id: user.id,
        username: user.username,
        role: user.role as 'admin' | 'user',
        displayName: user.displayName
      };

      const newState: AuthState = {
        user: authUser,
        isAuthenticated: true,
        token: this.generateMockToken()
      };

      this.authState.set(newState);
      this.syncSignals();
      this.saveAuthState(newState);
      
      // Navigate based on role
      this.router.navigate(['/dashboard']);
      return true;
    }

    return false;
  }

  logout(): void {
    const emptyState: AuthState = {
      user: null,
      isAuthenticated: false,
      token: null
    };
    
    this.authState.set(emptyState);
    this.syncSignals();
    this.clearAuthState();
    this.router.navigate(['/login']);
  }

  hasRole(roles: string[]): boolean {
    const currentUser = this.user();
    return currentUser ? roles.includes(currentUser.role) : false;
  }

  private syncSignals(): void {
    const state = this.authState();
    this.user.set(state.user);
    this.isAuthenticated.set(state.isAuthenticated);
  }

  private generateMockToken(): string {
    return 'mock-jwt-token-' + Math.random().toString(36).substr(2, 9);
  }

  private saveAuthState(state: AuthState): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
  }

  private loadAuthState(): AuthState {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      user: null,
      isAuthenticated: false,
      token: null
    };
  }

  private clearAuthState(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
`;
}

function servicesIndex() {
  return `export * from './auth.service';
`;
}

// ============================================
// CORE - GUARDS
// ============================================

function authGuard() {
  return `import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
`;
}

function roleGuard() {
  return `import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const RoleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const requiredRoles = route.data['roles'] as string[];
  
  if (authService.hasRole(requiredRoles)) {
    return true;
  }

  router.navigate(['/dashboard']);
  return false;
};
`;
}

function guardsIndex() {
  return `export * from './auth.guard';
export * from './role.guard';
`;
}

// ============================================
// SHARED - CONSTANTS
// ============================================

function rolesConstant() {
  return `export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export const ROLE_ROUTES = {
  [UserRole.ADMIN]: ['/dashboard', '/user', '/admin'],
  [UserRole.USER]: ['/dashboard', '/user']
};
`;
}

function constantsIndex() {
  return `export * from './roles';
`;
}

// ============================================
// ENVIRONMENTS
// ============================================

function environment() {
  return `export const environment = {
  production: true,
  apiUrl: 'https://api.production.com'
};
`;
}

function environmentDev() {
  return `export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
`;
}

module.exports = {
  packageJson,
  angularJson,
  tsConfig,
  tsConfigApp,
  gitignore,
  readme,
  indexHtml,
  mainTs,
  stylesScss,
  designTokens,
  appConfig,
  appComponent,
  appComponentHtml,
  appComponentScss,
  appRoutes,
  userModel,
  authModel,
  modelsIndex,
  authService,
  servicesIndex,
  authGuard,
  roleGuard,
  guardsIndex,
  rolesConstant,
  constantsIndex,
  environment,
  environmentDev
};
