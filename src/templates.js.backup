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
        "schematics": {},
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
              "assets": [
                {
                  "glob": "**/*",
                  "input": "src/assets",
                  "output": "/assets"
                }
              ],
              "styles": [
                "src/styles.css"
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
              "assets": [
                {
                  "glob": "**/*",
                  "input": "src/assets",
                  "output": "/assets"
                }
              ],
              "styles": [
                "src/styles.css"
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

This project was generated with Angular CLI version 21.0.2.

## Development server

Run \`npm start\` for a dev server. Navigate to \`http://localhost:4200/\`. The application will automatically reload if you change any of the source files.

## Build

Run \`npm run build\` to build the project. The build artifacts will be stored in the \`dist/\` directory.

## Running unit tests

Run \`npm test\` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use \`ng help\` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
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

function stylesCss() {
  return `/* You can add global styles to this file, and also import other style files */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
}
`;
}

function appConfig() {
  return `import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
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
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 21.0.2 Boilerplate';
}
`;
}

function appComponentHtml(projectName) {
  return `<div class="app-container">
  <header>
    <h1>Welcome to {{ title }}!</h1>
    <p>Your Angular project is ready to go! 🚀</p>
  </header>
  
  <main>
    <div class="content">
      <h2>Project: ${projectName}</h2>
      <p>This is your Angular 21.0.2 boilerplate project with:</p>
      <ul>
        <li>✅ Standalone Components</li>
        <li>✅ Routing Setup</li>
        <li>✅ HTTP Client</li>
        <li>✅ Organized Folder Structure</li>
        <li>✅ Environment Configuration</li>
      </ul>
      
      <div class="getting-started">
        <h3>Getting Started:</h3>
        <ol>
          <li>Create components in <code>src/app/components/</code></li>
          <li>Create services in <code>src/app/services/</code></li>
          <li>Define routes in <code>src/app/app.routes.ts</code></li>
          <li>Add models in <code>src/app/models/</code></li>
        </ol>
      </div>
    </div>
  </main>
  
  <footer>
    <p>Happy Coding! 💻</p>
  </footer>
  
  <router-outlet />
</div>
`;
}

function appComponentCss() {
  return `.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 1rem;
}

ul, ol {
  margin: 1rem 0 1rem 2rem;
}

li {
  margin: 0.5rem 0;
  color: #555;
}

.getting-started {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.getting-started h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

code {
  background: #e9ecef;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #d63384;
}

footer {
  background: #f8f9fa;
  text-align: center;
  padding: 1.5rem;
  color: #666;
  border-top: 1px solid #dee2e6;
}
`;
}

function appRoutes() {
  return `import { Routes } from '@angular/router';

export const routes: Routes = [
  // Add your routes here
  // Example:
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent }
];
`;
}

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
  stylesCss,
  appConfig,
  appComponent,
  appComponentHtml,
  appComponentCss,
  appRoutes,
  environment,
  environmentDev
};
