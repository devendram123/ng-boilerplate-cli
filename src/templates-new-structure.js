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
      "@angular/platform-browser": "^21.0.2",
      "@angular/platform-browser-dynamic": "^21.0.2",
      "@angular/router": "^21.0.2",
      "crypto-js": "^4.2.0",
      "rxjs": "~7.8.0",
      "tslib": "^2.3.0",
      "zone.js": "~0.15.0"
    },
    "devDependencies": {
      "@angular-devkit/build-angular": "^21.0.2",
      "@angular/cli": "^21.0.2",
      "@angular/compiler-cli": "^21.0.2",
      "@types/jasmine": "~5.1.0",
      "@types/crypto-js": "^4.2.0",
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

Angular 21.0.2 application with modern architecture.

## Features

✅ API Service with encryption support
✅ Global loader with interceptor
✅ Authentication guard
✅ Reusable directives and pipes
✅ Utility functions for crypto, storage, and dates
✅ Modular architecture with core, shared, and pages

## Development Server

\`\`\`bash
npm start
\`\`\`

Navigate to \`http://localhost:4200/\`

## Build

\`\`\`bash
npm run build
\`\`\`

Build artifacts will be stored in the \`dist/\` directory.

## Project Structure

\`\`\`
src/app/
├── core/              # Singleton services, guards, interceptors
├── shared/            # Reusable components, directives, pipes
└── pages/             # Feature pages (lazy loaded)
\`\`\`
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
@import './assets/styles/mixins';
@import './assets/styles/global';

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
  return `// Design Tokens

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
$font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
`;
}

function mixins() {
  return `// Mixins

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin card-shadow($level: 'md') {
  @if $level == 'sm' {
    box-shadow: $shadow-sm;
  } @else if $level == 'lg' {
    box-shadow: $shadow-lg;
  } @else {
    box-shadow: $shadow-md;
  }
}
`;
}

function globalStyles() {
  return `// Global Styles

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-lg;
}

.text-center {
  text-align: center;
}

.mt-1 { margin-top: $spacing-sm; }
.mt-2 { margin-top: $spacing-md; }
.mt-3 { margin-top: $spacing-lg; }
.mt-4 { margin-top: $spacing-xl; }

.mb-1 { margin-bottom: $spacing-sm; }
.mb-2 { margin-bottom: $spacing-md; }
.mb-3 { margin-bottom: $spacing-lg; }
.mb-4 { margin-bottom: $spacing-xl; }

.p-1 { padding: $spacing-sm; }
.p-2 { padding: $spacing-md; }
.p-3 { padding: $spacing-lg; }
.p-4 { padding: $spacing-xl; }
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
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { loaderInterceptor } from './core/interceptors/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor, loaderInterceptor])
    ),
    provideAnimationsAsync()
  ]
};
`;
}

function appComponent() {
  return `import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular App';
}
`;
}

function appComponentHtml() {
  return `<app-loader />
<router-outlet />`;
}

function appComponentScss() {
  return `:host {
  display: block;
  height: 100%;
}
`;
}

function appRoutes() {
  return `import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'hello-world',
    loadComponent: () => import('./pages/hello-world/hello-world.page').then(m => m.HelloWorldPage)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
`;
}

// ============================================
// CORE - SERVICES
// ============================================

function apiService() {
  return `import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, options?: any): Observable<T> {
    return this.http.get<T>(\`\${this.baseUrl}\${endpoint}\`, options);
  }

  post<T>(endpoint: string, data: any, options?: any): Observable<T> {
    return this.http.post<T>(\`\${this.baseUrl}\${endpoint}\`, data, options);
  }

  put<T>(endpoint: string, data: any, options?: any): Observable<T> {
    return this.http.put<T>(\`\${this.baseUrl}\${endpoint}\`, data, options);
  }

  delete<T>(endpoint: string, options?: any): Observable<T> {
    return this.http.delete<T>(\`\${this.baseUrl}\${endpoint}\`, options);
  }
}
`;
}

function encryptionService() {
  return `import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private secretKey = 'your-secret-key-here'; // Change this in production

  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  decrypt(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  encryptObject(obj: any): string {
    return this.encrypt(JSON.stringify(obj));
  }

  decryptObject<T>(encryptedData: string): T {
    const decrypted = this.decrypt(encryptedData);
    return JSON.parse(decrypted) as T;
  }
}
`;
}

function loaderService() {
  return `import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingCount = 0;
  public isLoading = signal<boolean>(false);

  show(): void {
    this.loadingCount++;
    this.isLoading.set(true);
  }

  hide(): void {
    this.loadingCount--;
    if (this.loadingCount <= 0) {
      this.loadingCount = 0;
      this.isLoading.set(false);
    }
  }

  reset(): void {
    this.loadingCount = 0;
    this.isLoading.set(false);
  }
}
`;
}

function authService() {
  return `import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  public isAuthenticated = signal<boolean>(this.hasToken());

  constructor(private router: Router) {}

  login(token: string): void {
    StorageUtil.setItem(this.TOKEN_KEY, token);
    this.isAuthenticated.set(true);
  }

  logout(): void {
    StorageUtil.removeItem(this.TOKEN_KEY);
    this.isAuthenticated.set(false);
    this.router.navigate(['/home']);
  }

  getToken(): string | null {
    return StorageUtil.getItem(this.TOKEN_KEY);
  }

  private hasToken(): boolean {
    return !!this.getToken();
  }
}
`;
}

// ============================================
// CORE - GUARDS
// ============================================

function authGuard() {
  return `import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/home']);
  return false;
};
`;
}

// ============================================
// CORE - INTERCEPTORS
// ============================================

function authInterceptor() {
  return `import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: \`Bearer \${token}\`
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
`;
}

function loaderInterceptor() {
  return `import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);
  
  loaderService.show();

  return next(req).pipe(
    finalize(() => loaderService.hide())
  );
};
`;
}

// ============================================
// CORE - CONSTANTS
// ============================================

function apiEndpoints() {
  return `export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh'
  },
  USERS: {
    GET_ALL: '/users',
    GET_BY_ID: (id: string) => \`/users/\${id}\`,
    CREATE: '/users',
    UPDATE: (id: string) => \`/users/\${id}\`,
    DELETE: (id: string) => \`/users/\${id}\`
  }
};
`;
}

function appConstants() {
  return `export const APP_CONSTANTS = {
  APP_NAME: 'Angular App',
  APP_VERSION: '1.0.0',
  DEFAULT_PAGE_SIZE: 10,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  DEBOUNCE_TIME: 300,
  DATE_FORMAT: 'YYYY-MM-DD',
  DATETIME_FORMAT: 'YYYY-MM-DD HH:mm:ss'
};
`;
}

function regexConstants() {
  return `export const REGEX_PATTERNS = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,
  PHONE: /^\\+?[1-9]\\d{1,14}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/,
  URL: /^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/,
  NUMBERS_ONLY: /^[0-9]+$/,
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/
};
`;
}

// ============================================
// CORE - UTILS
// ============================================

function cryptoUtil() {
  return `import * as CryptoJS from 'crypto-js';

export class CryptoUtil {
  private static readonly SECRET_KEY = 'your-secret-key';

  static hashSHA256(data: string): string {
    return CryptoJS.SHA256(data).toString();
  }

  static hashMD5(data: string): string {
    return CryptoJS.MD5(data).toString();
  }

  static generateRandomKey(length: number = 32): string {
    return CryptoJS.lib.WordArray.random(length).toString();
  }

  static base64Encode(data: string): string {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data));
  }

  static base64Decode(data: string): string {
    return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
  }
}
`;
}

function storageUtil() {
  return `export class StorageUtil {
  static setItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  static getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting from localStorage', error);
      return null;
    }
  }

  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  }

  static hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
`;
}

function dateUtil() {
  return `export class DateUtil {
  static formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  }

  static parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static diffInDays(date1: Date, date2: Date): number {
    const diff = Math.abs(date1.getTime() - date2.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  static isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  static isPast(date: Date): boolean {
    return date < new Date();
  }

  static isFuture(date: Date): boolean {
    return date > new Date();
  }
}
`;
}

// ============================================
// SHARED - COMPONENTS
// ============================================

function loaderComponentTs() {
  return `import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  loaderService = inject(LoaderService);
}
`;
}

function loaderComponentHtml() {
  return `@if (loaderService.isLoading()) {
  <div class="loader-overlay">
    <div class="loader-spinner"></div>
  </div>
}
`;
}

function loaderComponentScss() {
  return `@use '../../../../assets/styles/variables' as *;

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid $gray-300;
  border-top-color: $primary-color;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
`;
}

function helloWorldComponentTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  imports: [CommonModule],
  template: \`
    <div class="hello-world">
      <h1>Hello World!</h1>
      <p>Welcome to Angular 21.0.2</p>
    </div>
  \`,
  styles: [\`
    .hello-world {
      text-align: center;
      padding: 2rem;
      
      h1 {
        color: #1976d2;
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      p {
        color: #666;
        font-size: 1.2rem;
      }
    }
  \`]
})
export class HelloWorldComponent {}
`;
}

// ============================================
// SHARED - DIRECTIVES
// ============================================

function onlyNumberDirective() {
  return `import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];
    
    if (allowedKeys.includes(event.key)) {
      return;
    }

    if (event.key < '0' || event.key > '9') {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text') || '';
    const numericData = pastedData.replace(/[^0-9]/g, '');
    
    if (numericData) {
      document.execCommand('insertText', false, numericData);
    }
  }
}
`;
}

function debounceClickDirective() {
  return `import { Directive, EventEmitter, HostListener, Input, Output, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnDestroy {
  @Input() debounceTime = 300;
  @Output() debounceClick = new EventEmitter();
  
  private clicks = new Subject<Event>();
  private subscription: Subscription;

  constructor() {
    this.subscription = this.clicks
      .pipe(debounceTime(this.debounceTime))
      .subscribe(e => this.debounceClick.emit(e));
  }

  @HostListener('click', ['$event'])
  clickEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
`;
}

// ============================================
// SHARED - PIPES
// ============================================

function maskPipe() {
  return `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {
  transform(value: string, visibleChars: number = 4, maskChar: string = '*'): string {
    if (!value) return '';
    
    const length = value.length;
    if (length <= visibleChars) return value;
    
    const masked = maskChar.repeat(length - visibleChars);
    return masked + value.slice(-visibleChars);
  }
}
`;
}

function capitalizePipe() {
  return `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, allWords: boolean = false): string {
    if (!value) return '';

    if (allWords) {
      return value.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
`;
}

// ============================================
// SHARED - MODELS
// ============================================

function apiResponseModel() {
  return `export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  statusCode?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
`;
}

// ============================================
// PAGES
// ============================================

function homePageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HelloWorldComponent } from '../../shared/components/hello-world/hello-world.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, HelloWorldComponent],
  template: \`
    <div class="home-page">
      <app-hello-world />
      <div class="navigation">
        <a routerLink="/hello-world" class="nav-link">Go to Hello World Page</a>
      </div>
    </div>
  \`,
  styles: [\`
    .home-page {
      padding: 2rem;
    }

    .navigation {
      text-align: center;
      margin-top: 2rem;
    }

    .nav-link {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: #1976d2;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #1565c0;
      }
    }
  \`]
})
export class HomeComponent {}
`;
}

function homePageHtml() {
  return ``;
}

function homePageRoutes() {
  return `import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
`;
}

function helloWorldPageTs() {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hello-world-page',
  imports: [CommonModule, RouterModule],
  template: \`
    <div class="hello-world-page">
      <h1>Hello World Page</h1>
      <p>This is a standalone hello world page.</p>
      <a routerLink="/home" class="back-link">← Back to Home</a>
    </div>
  \`,
  styles: [\`
    .hello-world-page {
      padding: 2rem;
      text-align: center;

      h1 {
        color: #1976d2;
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        color: #666;
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }

      .back-link {
        display: inline-block;
        color: #1976d2;
        text-decoration: none;
        font-size: 1rem;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  \`]
})
export class HelloWorldPage {}
`;
}

// ============================================
// ENVIRONMENTS
// ============================================

function environment() {
  return `export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
`;
}

function environmentProd() {
  return `export const environment = {
  production: true,
  apiUrl: 'https://api.production.com'
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
  mixins,
  globalStyles,
  appConfig,
  appComponent,
  appComponentHtml,
  appComponentScss,
  appRoutes,
  apiService,
  encryptionService,
  loaderService,
  authService,
  authGuard,
  authInterceptor,
  loaderInterceptor,
  apiEndpoints,
  appConstants,
  regexConstants,
  cryptoUtil,
  storageUtil,
  dateUtil,
  loaderComponentTs,
  loaderComponentHtml,
  loaderComponentScss,
  helloWorldComponentTs,
  onlyNumberDirective,
  debounceClickDirective,
  maskPipe,
  capitalizePipe,
  apiResponseModel,
  homePageTs,
  homePageHtml,
  homePageRoutes,
  helloWorldPageTs,
  environment,
  environmentProd
};
