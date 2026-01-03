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
      "typescript": "~5.7.2"
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




// ============================================
// UI - ATOMS - BUTTON
// ============================================

function buttonComponentTs() {
  return `import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
`;
}

function buttonComponentHtml() {
  return `<button 
  [type]="type"
  [class]="'btn btn--' + variant"
  [class.btn--full-width]="fullWidth"
  [disabled]="disabled"
  (click)="onClick()">
  <ng-content></ng-content>
</button>
`;
}

function buttonComponentScss() {
  return `@import '../../../../assets/styles/variables';

.btn {
  padding: $spacing-sm $spacing-lg;
  font-size: $font-size-base;
  font-weight: 500;
  border: none;
  border-radius: $border-radius-sm;
  cursor: pointer;
  transition: all $transition-fast;
  font-family: $font-family-base;

  &--primary {
    background-color: $primary-color;
    color: white;

    &:hover:not(:disabled) {
      background-color: darken($primary-color, 10%);
      box-shadow: $shadow-md;
    }
  }

  &--secondary {
    background-color: $gray-200;
    color: $text-color;

    &:hover:not(:disabled) {
      background-color: $gray-300;
    }
  }

  &--outline {
    background-color: transparent;
    color: $primary-color;
    border: 2px solid $primary-color;

    &:hover:not(:disabled) {
      background-color: $primary-color;
      color: white;
    }
  }

  &--full-width {
    width: 100%;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
`;
}

// ============================================
// UI - ATOMS - INPUT
// ============================================

function inputComponentTs() {
  return `import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() error: string = '';

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
`;
}

function inputComponentHtml() {
  return `<div class="input-wrapper">
  <label *ngIf="label" class="input-wrapper__label">{{ label }}</label>
  <input
    [type]="type"
    [placeholder]="placeholder"
    [disabled]="disabled"
    [value]="value"
    [class.input-wrapper__input--error]="error"
    class="input-wrapper__input"
    (input)="onInputChange($event)"
    (blur)="onBlur()"
  />
  <span *ngIf="error" class="input-wrapper__error">{{ error }}</span>
</div>
`;
}

function inputComponentScss() {
  return `@import '../../../../assets/styles/variables';

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;

  &__label {
    font-size: $font-size-sm;
    font-weight: 500;
    color: $text-color;
  }

  &__input {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
    border: 1px solid $border-color;
    border-radius: $border-radius-sm;
    transition: all $transition-fast;
    font-family: $font-family-base;

    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba($primary-color, 0.1);
    }

    &--error {
      border-color: $error-color;

      &:focus {
        box-shadow: 0 0 0 3px rgba($error-color, 0.1);
      }
    }

    &:disabled {
      background-color: $gray-100;
      cursor: not-allowed;
    }
  }

  &__error {
    font-size: $font-size-xs;
    color: $error-color;
  }
}
`;
}

// ============================================
// UI - ATOMS - CARD
// ============================================

function cardComponentTs() {
  return `import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() elevation: 'sm' | 'md' | 'lg' = 'md';
  @Input() padding: 'sm' | 'md' | 'lg' = 'md';
}
`;
}

function cardComponentHtml() {
  return `<div 
  [class]="'card card--elevation-' + elevation + ' card--padding-' + padding">
  <ng-content></ng-content>
</div>
`;
}

function cardComponentScss() {
  return `@import '../../../../assets/styles/variables';

.card {
  background-color: white;
  border-radius: $border-radius-md;
  border: 1px solid $gray-200;

  &--elevation {
    &-sm {
      box-shadow: $shadow-sm;
    }

    &-md {
      box-shadow: $shadow-md;
    }

    &-lg {
      box-shadow: $shadow-lg;
    }
  }

  &--padding {
    &-sm {
      padding: $spacing-md;
    }

    &-md {
      padding: $spacing-lg;
    }

    &-lg {
      padding: $spacing-xl;
    }
  }
}
`;
}

// ============================================
// UI - MOLECULES - SIDEBAR
// ============================================

function sidebarComponentTs() {
  return `import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole, ROLE_ROUTES } from '../../../shared/constants/roles';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  roles: UserRole[];
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  user = this.authService.user;

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard', roles: [UserRole.ADMIN, UserRole.USER] },
    { label: 'User', icon: 'person', route: '/user', roles: [UserRole.ADMIN, UserRole.USER] },
    { label: 'Admin', icon: 'admin_panel_settings', route: '/admin', roles: [UserRole.ADMIN] }
  ];

  visibleMenuItems = computed(() => {
    const currentUser = this.user();
    if (!currentUser) return [];
    
    return this.menuItems.filter(item => 
      item.roles.includes(currentUser.role as UserRole)
    );
  });

  logout(): void {
    this.authService.logout();
  }
}
`;
}

function sidebarComponentHtml() {
  return `<aside class="sidebar">
  <div class="sidebar__header">
    <h2 class="sidebar__title">Collateral Gap</h2>
    <p class="sidebar__subtitle" *ngIf="user()">{{ user()?.displayName }}</p>
    <span class="sidebar__role" *ngIf="user()">{{ user()?.role }}</span>
  </div>

  <nav class="sidebar__nav">
    <a 
      *ngFor="let item of visibleMenuItems()"
      [routerLink]="item.route"
      routerLinkActive="sidebar__nav-item--active"
      class="sidebar__nav-item">
      <span class="material-icons sidebar__nav-icon">{{ item.icon }}</span>
      <span class="sidebar__nav-label">{{ item.label }}</span>
    </a>
  </nav>

  <div class="sidebar__footer">
    <button class="sidebar__logout" (click)="logout()">
      <span class="material-icons">logout</span>
      <span>Logout</span>
    </button>
  </div>
</aside>
`;
}

function sidebarComponentScss() {
  return `@import '../../../../assets/styles/variables';

.sidebar {
  width: $sidebar-width;
  height: 100vh;
  background-color: $gray-900;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;

  &__header {
    padding: $spacing-lg;
    border-bottom: 1px solid rgba(white, 0.1);
  }

  &__title {
    font-size: $font-size-xl;
    font-weight: 700;
    margin: 0 0 $spacing-xs 0;
  }

  &__subtitle {
    font-size: $font-size-sm;
    color: $gray-400;
    margin: 0;
  }

  &__role {
    display: inline-block;
    margin-top: $spacing-xs;
    padding: $spacing-xs $spacing-sm;
    background-color: $primary-color;
    border-radius: $border-radius-sm;
    font-size: $font-size-xs;
    text-transform: uppercase;
    font-weight: 600;
  }

  &__nav {
    flex: 1;
    padding: $spacing-md 0;
    overflow-y: auto;
  }

  &__nav-item {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-md $spacing-lg;
    color: $gray-300;
    text-decoration: none;
    transition: all $transition-fast;

    &:hover {
      background-color: rgba(white, 0.05);
      color: white;
    }

    &--active {
      background-color: rgba($primary-color, 0.2);
      color: white;
      border-right: 3px solid $primary-color;
    }
  }

  &__nav-icon {
    font-size: 20px;
  }

  &__nav-label {
    font-size: $font-size-base;
  }

  &__footer {
    padding: $spacing-lg;
    border-top: 1px solid rgba(white, 0.1);
  }

  &__logout {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    width: 100%;
    padding: $spacing-md;
    background-color: transparent;
    border: 1px solid rgba(white, 0.2);
    border-radius: $border-radius-sm;
    color: white;
    cursor: pointer;
    transition: all $transition-fast;

    &:hover {
      background-color: rgba(white, 0.1);
      border-color: rgba(white, 0.4);
    }
  }
}
`;
}

// ============================================
// UI - MOLECULES - TABS
// ============================================

function tabsComponentTs() {
  return `import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tab {
  label: string;
  value: string;
  icon?: string;
}

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTab: string = '';
  @Output() tabChange = new EventEmitter<string>();

  selectTab(value: string): void {
    this.activeTab = value;
    this.tabChange.emit(value);
  }
}
`;
}

function tabsComponentHtml() {
  return `<div class="tabs">
  <button
    *ngFor="let tab of tabs"
    [class.tabs__tab--active]="activeTab === tab.value"
    class="tabs__tab"
    (click)="selectTab(tab.value)">
    <span *ngIf="tab.icon" class="material-icons tabs__icon">{{ tab.icon }}</span>
    {{ tab.label }}
  </button>
</div>
`;
}

function tabsComponentScss() {
  return `@import '../../../../assets/styles/variables';

.tabs {
  display: flex;
  gap: $spacing-sm;
  border-bottom: 2px solid $gray-200;

  &__tab {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    padding: $spacing-md $spacing-lg;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    color: $text-secondary;
    font-size: $font-size-base;
    font-weight: 500;
    cursor: pointer;
    transition: all $transition-fast;
    margin-bottom: -2px;

    &:hover {
      color: $primary-color;
      background-color: rgba($primary-color, 0.05);
    }

    &--active {
      color: $primary-color;
      border-bottom-color: $primary-color;
    }
  }

  &__icon {
    font-size: 18px;
  }
}
`;
}

// ============================================
// UI - MOLECULES - LOGIN FORM
// ============================================

function loginFormComponentTs() {
  return `import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { LoginRequest } from '../../../core/models/auth.model';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, FormsModule, ButtonComponent, InputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Output() submitLogin = new EventEmitter<LoginRequest>();

  username: string = '';
  password: string = '';
  role: 'admin' | 'user' = 'user';
  errors: any = {};

  onSubmit(): void {
    this.errors = {};

    if (!this.username) {
      this.errors.username = 'Username is required';
    }

    if (!this.password) {
      this.errors.password = 'Password is required';
    }

    if (Object.keys(this.errors).length === 0) {
      this.submitLogin.emit({
        username: this.username,
        password: this.password,
        role: this.role
      });
    }
  }

  setRole(role: 'admin' | 'user'): void {
    this.role = role;
  }
}
`;
}

function loginFormComponentHtml() {
  return `<form class="login-form" (ngSubmit)="onSubmit()">
  <div class="login-form__role-selector">
    <button
      type="button"
      [class.login-form__role-btn--active]="role === 'user'"
      class="login-form__role-btn"
      (click)="setRole('user')">
      <span class="material-icons">person</span>
      User
    </button>
    <button
      type="button"
      [class.login-form__role-btn--active]="role === 'admin'"
      class="login-form__role-btn"
      (click)="setRole('admin')">
      <span class="material-icons">admin_panel_settings</span>
      Admin
    </button>
  </div>

  <app-input
    label="Username"
    type="text"
    placeholder="Enter your username"
    [(ngModel)]="username"
    name="username"
    [error]="errors.username">
  </app-input>

  <app-input
    label="Password"
    type="password"
    placeholder="Enter your password"
    [(ngModel)]="password"
    name="password"
    [error]="errors.password">
  </app-input>

  <app-button type="submit" [fullWidth]="true">
    Login as {{ role }}
  </app-button>

  <div class="login-form__hint">
    <p><strong>Demo Credentials:</strong></p>
    <p>Admin: admin / admin123</p>
    <p>User: user / user123</p>
  </div>
</form>
`;
}

function loginFormComponentScss() {
  return `@import '../../../../assets/styles/variables';

.login-form {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;

  &__role-selector {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-sm;
  }

  &__role-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-xs;
    padding: $spacing-md;
    background-color: $gray-100;
    border: 2px solid $gray-200;
    border-radius: $border-radius-sm;
    color: $text-secondary;
    font-size: $font-size-base;
    font-weight: 500;
    cursor: pointer;
    transition: all $transition-fast;

    &:hover {
      border-color: $primary-color;
      background-color: rgba($primary-color, 0.05);
    }

    &--active {
      background-color: $primary-color;
      border-color: $primary-color;
      color: white;
    }
  }

  &__hint {
    padding: $spacing-md;
    background-color: $gray-50;
    border-radius: $border-radius-sm;
    font-size: $font-size-sm;
    color: $text-secondary;
    
    p {
      margin: $spacing-xs 0;
    }

    strong {
      color: $text-color;
    }
  }
}
`;
}




// ============================================
// UI - ORGANISMS - DASHBOARD LAYOUT
// ============================================

function dashboardLayoutComponentTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../molecules/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {}
`;
}

function dashboardLayoutComponentHtml() {
  return `<div class="dashboard-layout">
  <app-sidebar></app-sidebar>
  <main class="dashboard-layout__content">
    <ng-content></ng-content>
  </main>
</div>
`;
}

function dashboardLayoutComponentScss() {
  return `@import '../../../../assets/styles/variables';

.dashboard-layout {
  display: flex;
  height: 100vh;
  background-color: $background-secondary;

  &__content {
    margin-left: $sidebar-width;
    flex: 1;
    overflow-y: auto;
    padding: $spacing-xl;
  }
}
`;
}

// ============================================
// UI - ORGANISMS - AUTH LAYOUT
// ============================================

function authLayoutComponentTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-layout',
  imports: [CommonModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {}
`;
}

function authLayoutComponentHtml() {
  return `<div class="auth-layout">
  <div class="auth-layout__container">
    <div class="auth-layout__header">
      <h1 class="auth-layout__title">Collateral Gap</h1>
      <p class="auth-layout__subtitle">Production-ready Angular application</p>
    </div>
    <div class="auth-layout__content">
      <ng-content></ng-content>
    </div>
  </div>
</div>
`;
}

function authLayoutComponentScss() {
  return `@import '../../../../assets/styles/variables';

.auth-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, $primary-color 0%, lighten($primary-color, 10%) 100%);
  padding: $spacing-lg;

  &__container {
    width: 100%;
    max-width: 450px;
  }

  &__header {
    text-align: center;
    margin-bottom: $spacing-xl;
    color: white;
  }

  &__title {
    font-size: $font-size-xxl * 1.5;
    font-weight: 700;
    margin: 0 0 $spacing-sm 0;
  }

  &__subtitle {
    font-size: $font-size-base;
    opacity: 0.9;
    margin: 0;
  }

  &__content {
    background-color: white;
    padding: $spacing-xl;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-lg;
  }
}
`;
}

// ============================================
// PAGES - LOGIN
// ============================================

function loginPageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthLayoutComponent } from '../../ui/organisms/auth-layout/auth-layout.component';
import { LoginFormComponent } from '../../ui/molecules/login-form/login-form.component';
import { AuthService } from '../../core/services/auth.service';
import { LoginRequest } from '../../core/models/auth.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule, AuthLayoutComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Redirect if already authenticated
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onLogin(credentials: LoginRequest): void {
    this.errorMessage = '';
    const success = this.authService.login(credentials);
    
    if (!success) {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
`;
}

function loginPageHtml() {
  return `<app-auth-layout>
  <div class="login-page">
    <h2 class="login-page__title">Welcome Back</h2>
    <p class="login-page__description">
      Please select your role and enter your credentials to continue
    </p>

    <div *ngIf="errorMessage" class="login-page__error">
      {{ errorMessage }}
    </div>

    <app-login-form (submitLogin)="onLogin($event)"></app-login-form>
  </div>
</app-auth-layout>
`;
}

function loginPageScss() {
  return `@import '../../../assets/styles/variables';

.login-page {
  &__title {
    font-size: $font-size-xxl;
    font-weight: 700;
    color: $text-color;
    margin: 0 0 $spacing-sm 0;
    text-align: center;
  }

  &__description {
    font-size: $font-size-sm;
    color: $text-secondary;
    text-align: center;
    margin: 0 0 $spacing-xl 0;
  }

  &__error {
    padding: $spacing-md;
    background-color: rgba($error-color, 0.1);
    border-left: 4px solid $error-color;
    color: $error-color;
    border-radius: $border-radius-sm;
    margin-bottom: $spacing-lg;
    font-size: $font-size-sm;
  }
}
`;
}

// ============================================
// PAGES - DASHBOARD
// ============================================

function dashboardPageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../ui/organisms/dashboard-layout/dashboard-layout.component';
import { CardComponent } from '../../ui/atoms/card/card.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, DashboardLayoutComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  user = this.authService.user;

  stats = [
    { label: 'Total Users', value: '1,234', icon: 'people', color: '#1976d2' },
    { label: 'Active Sessions', value: '89', icon: 'schedule', color: '#4caf50' },
    { label: 'Reports', value: '456', icon: 'assessment', color: '#ff9800' },
    { label: 'Alerts', value: '12', icon: 'warning', color: '#f44336' }
  ];
}
`;
}

function dashboardPageHtml() {
  return `<app-dashboard-layout>
  <div class="dashboard-page">
    <div class="dashboard-page__header">
      <h1 class="dashboard-page__title">Dashboard</h1>
      <p class="dashboard-page__subtitle">Welcome back, {{ user()?.displayName }}!</p>
    </div>

    <div class="dashboard-page__stats">
      <app-card *ngFor="let stat of stats" elevation="md" padding="lg" class="stat-card">
        <div class="stat-card__content">
          <div class="stat-card__icon" [style.background-color]="stat.color">
            <span class="material-icons">{{ stat.icon }}</span>
          </div>
          <div class="stat-card__info">
            <div class="stat-card__value">{{ stat.value }}</div>
            <div class="stat-card__label">{{ stat.label }}</div>
          </div>
        </div>
      </app-card>
    </div>

    <div class="dashboard-page__content">
      <app-card elevation="md" padding="lg">
        <h2 class="dashboard-page__section-title">Recent Activity</h2>
        <p class="dashboard-page__placeholder">
          This is your main dashboard. Add widgets, charts, and real-time data here.
        </p>
      </app-card>
    </div>
  </div>
</app-dashboard-layout>
`;
}

function dashboardPageScss() {
  return `@import '../../../assets/styles/variables';

.dashboard-page {
  &__header {
    margin-bottom: $spacing-xl;
  }

  &__title {
    font-size: $font-size-xxl * 1.2;
    font-weight: 700;
    color: $text-color;
    margin: 0 0 $spacing-xs 0;
  }

  &__subtitle {
    font-size: $font-size-base;
    color: $text-secondary;
    margin: 0;
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
  }

  &__content {
    display: grid;
    gap: $spacing-lg;
  }

  &__section-title {
    font-size: $font-size-lg;
    font-weight: 600;
    margin: 0 0 $spacing-md 0;
    color: $text-color;
  }

  &__placeholder {
    color: $text-secondary;
    margin: 0;
  }
}

.stat-card {
  &__content {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
  }

  &__icon {
    width: 60px;
    height: 60px;
    border-radius: $border-radius-md;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    .material-icons {
      font-size: 30px;
    }
  }

  &__info {
    flex: 1;
  }

  &__value {
    font-size: $font-size-xxl;
    font-weight: 700;
    color: $text-color;
    margin-bottom: $spacing-xs;
  }

  &__label {
    font-size: $font-size-sm;
    color: $text-secondary;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}
`;
}

// ============================================
// PAGES - USER
// ============================================

function userPageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../ui/organisms/dashboard-layout/dashboard-layout.component';
import { CardComponent } from '../../ui/atoms/card/card.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-user',
  imports: [CommonModule, DashboardLayoutComponent, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(private authService: AuthService) {}

  user = this.authService.user;

  userInfo = [
    { label: 'Username', value: this.user()?.username },
    { label: 'Display Name', value: this.user()?.displayName },
    { label: 'Role', value: this.user()?.role },
    { label: 'Email', value: this.user()?.email || 'Not provided' }
  ];
}
`;
}

function userPageHtml() {
  return `<app-dashboard-layout>
  <div class="user-page">
    <div class="user-page__header">
      <h1 class="user-page__title">User Profile</h1>
      <p class="user-page__subtitle">Manage your account information</p>
    </div>

    <div class="user-page__content">
      <app-card elevation="md" padding="lg">
        <div class="user-page__profile">
          <div class="user-page__avatar">
            <span class="material-icons">account_circle</span>
          </div>
          <div class="user-page__info">
            <h2 class="user-page__name">{{ user()?.displayName }}</h2>
            <p class="user-page__role-badge">{{ user()?.role }}</p>
          </div>
        </div>

        <div class="user-page__details">
          <div *ngFor="let info of userInfo" class="user-page__detail-item">
            <span class="user-page__detail-label">{{ info.label }}</span>
            <span class="user-page__detail-value">{{ info.value }}</span>
          </div>
        </div>
      </app-card>

      <app-card elevation="md" padding="lg">
        <h3 class="user-page__section-title">Account Settings</h3>
        <p class="user-page__placeholder">
          Account settings and preferences will be available here.
        </p>
      </app-card>
    </div>
  </div>
</app-dashboard-layout>
`;
}

function userPageScss() {
  return `@import '../../../assets/styles/variables';

.user-page {
  &__header {
    margin-bottom: $spacing-xl;
  }

  &__title {
    font-size: $font-size-xxl * 1.2;
    font-weight: 700;
    color: $text-color;
    margin: 0 0 $spacing-xs 0;
  }

  &__subtitle {
    font-size: $font-size-base;
    color: $text-secondary;
    margin: 0;
  }

  &__content {
    display: grid;
    gap: $spacing-lg;
    max-width: 800px;
  }

  &__profile {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
    padding-bottom: $spacing-lg;
    border-bottom: 1px solid $gray-200;
    margin-bottom: $spacing-lg;
  }

  &__avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: $primary-color;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    .material-icons {
      font-size: 60px;
    }
  }

  &__name {
    font-size: $font-size-xl;
    font-weight: 600;
    margin: 0 0 $spacing-xs 0;
    color: $text-color;
  }

  &__role-badge {
    display: inline-block;
    padding: $spacing-xs $spacing-md;
    background-color: $primary-color;
    color: white;
    border-radius: $border-radius-sm;
    font-size: $font-size-xs;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
  }

  &__details {
    display: grid;
    gap: $spacing-md;
  }

  &__detail-item {
    display: flex;
    justify-content: space-between;
    padding: $spacing-md 0;
    border-bottom: 1px solid $gray-100;

    &:last-child {
      border-bottom: none;
    }
  }

  &__detail-label {
    font-weight: 600;
    color: $text-secondary;
  }

  &__detail-value {
    color: $text-color;
  }

  &__section-title {
    font-size: $font-size-lg;
    font-weight: 600;
    margin: 0 0 $spacing-md 0;
    color: $text-color;
  }

  &__placeholder {
    color: $text-secondary;
    margin: 0;
  }
}
`;
}

// ============================================
// PAGES - ADMIN
// ============================================

function adminPageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../ui/organisms/dashboard-layout/dashboard-layout.component';
import { CardComponent } from '../../ui/atoms/card/card.component';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, DashboardLayoutComponent, CardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  adminActions = [
    { title: 'User Management', description: 'Manage user accounts and permissions', icon: 'people' },
    { title: 'System Settings', description: 'Configure system-wide settings', icon: 'settings' },
    { title: 'Analytics', description: 'View detailed analytics and reports', icon: 'analytics' },
    { title: 'Security', description: 'Manage security and access controls', icon: 'security' }
  ];

  recentActivity = [
    { action: 'User created', user: 'john.doe', time: '2 minutes ago' },
    { action: 'Settings updated', user: 'admin', time: '15 minutes ago' },
    { action: 'Report generated', user: 'jane.smith', time: '1 hour ago' }
  ];
}
`;
}

function adminPageHtml() {
  return `<app-dashboard-layout>
  <div class="admin-page">
    <div class="admin-page__header">
      <h1 class="admin-page__title">Admin Panel</h1>
      <p class="admin-page__subtitle">System administration and management</p>
    </div>

    <div class="admin-page__notice">
      <span class="material-icons">admin_panel_settings</span>
      <span>You are viewing the admin panel with full system access</span>
    </div>

    <div class="admin-page__actions">
      <app-card 
        *ngFor="let action of adminActions" 
        elevation="md" 
        padding="lg"
        class="admin-action">
        <div class="admin-action__icon">
          <span class="material-icons">{{ action.icon }}</span>
        </div>
        <h3 class="admin-action__title">{{ action.title }}</h3>
        <p class="admin-action__description">{{ action.description }}</p>
      </app-card>
    </div>

    <app-card elevation="md" padding="lg">
      <h2 class="admin-page__section-title">Recent Activity</h2>
      <div class="admin-page__activity">
        <div *ngFor="let activity of recentActivity" class="activity-item">
          <div class="activity-item__icon">
            <span class="material-icons">history</span>
          </div>
          <div class="activity-item__content">
            <div class="activity-item__action">{{ activity.action }}</div>
            <div class="activity-item__meta">
              <span class="activity-item__user">{{ activity.user }}</span>
              <span class="activity-item__time">{{ activity.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </app-card>
  </div>
</app-dashboard-layout>
`;
}

function adminPageScss() {
  return `@import '../../../assets/styles/variables';

.admin-page {
  &__header {
    margin-bottom: $spacing-lg;
  }

  &__title {
    font-size: $font-size-xxl * 1.2;
    font-weight: 700;
    color: $text-color;
    margin: 0 0 $spacing-xs 0;
  }

  &__subtitle {
    font-size: $font-size-base;
    color: $text-secondary;
    margin: 0;
  }

  &__notice {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-md $spacing-lg;
    background-color: rgba($warning-color, 0.1);
    border-left: 4px solid $warning-color;
    border-radius: $border-radius-sm;
    color: darken($warning-color, 20%);
    margin-bottom: $spacing-xl;
    font-weight: 500;

    .material-icons {
      font-size: 24px;
    }
  }

  &__actions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
  }

  &__section-title {
    font-size: $font-size-lg;
    font-weight: 600;
    margin: 0 0 $spacing-lg 0;
    color: $text-color;
  }

  &__activity {
    display: grid;
    gap: $spacing-md;
  }
}

.admin-action {
  cursor: pointer;
  transition: all $transition-base;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-lg;
  }

  &__icon {
    width: 50px;
    height: 50px;
    border-radius: $border-radius-md;
    background-color: rgba($primary-color, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary-color;
    margin-bottom: $spacing-md;

    .material-icons {
      font-size: 28px;
    }
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: 600;
    margin: 0 0 $spacing-xs 0;
    color: $text-color;
  }

  &__description {
    font-size: $font-size-sm;
    color: $text-secondary;
    margin: 0;
  }
}

.activity-item {
  display: flex;
  gap: $spacing-md;
  padding: $spacing-md;
  border-radius: $border-radius-sm;
  transition: background-color $transition-fast;

  &:hover {
    background-color: $gray-50;
  }

  &__icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $gray-100;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-secondary;
    flex-shrink: 0;
  }

  &__content {
    flex: 1;
  }

  &__action {
    font-weight: 500;
    color: $text-color;
    margin-bottom: $spacing-xs;
  }

  &__meta {
    display: flex;
    gap: $spacing-md;
    font-size: $font-size-sm;
  }

  &__user {
    color: $primary-color;
  }

  &__time {
    color: $text-secondary;
  }
}
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
  environmentDev,
  buttonComponentTs,
  buttonComponentHtml,
  buttonComponentScss,
  inputComponentTs,
  inputComponentHtml,
  inputComponentScss,
  cardComponentTs,
  cardComponentHtml,
  cardComponentScss,
  sidebarComponentTs,
  sidebarComponentHtml,
  sidebarComponentScss,
  tabsComponentTs,
  tabsComponentHtml,
  tabsComponentScss,
  'login-formComponentTs': loginFormComponentTs,
  'login-formComponentHtml': loginFormComponentHtml,
  'login-formComponentScss': loginFormComponentScss,
  'dashboard-layoutComponentTs': dashboardLayoutComponentTs,
  'dashboard-layoutComponentHtml': dashboardLayoutComponentHtml,
  'dashboard-layoutComponentScss': dashboardLayoutComponentScss,
  'auth-layoutComponentTs': authLayoutComponentTs,
  'auth-layoutComponentHtml': authLayoutComponentHtml,
  'auth-layoutComponentScss': authLayoutComponentScss,
  loginPageTs,
  loginPageHtml,
  loginPageScss,
  dashboardPageTs,
  dashboardPageHtml,
  dashboardPageScss,
  userPageTs,
  userPageHtml,
  userPageScss,
  adminPageTs,
  adminPageHtml,
  adminPageScss
};
