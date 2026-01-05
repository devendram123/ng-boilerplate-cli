const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { execSync } = require('child_process');

async function createProject(projectName) {
  const projectPath = path.join(process.cwd(), projectName);
  
  // Check if directory already exists
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red(`\n❌ Directory "${projectName}" already exists!\n`));
    process.exit(1);
  }

  try {
    // Create project directory
    const spinner1 = ora('Creating project directory...').start();
    await fs.ensureDir(projectPath);
    spinner1.succeed(chalk.green('Project directory created'));

    // Create folder structure
    const spinner2 = ora('Creating folder structure...').start();
    const folders = [
      // Core
      'src/app/core/services',
      'src/app/core/guards',
      'src/app/core/interceptors',
      'src/app/core/constants',
      'src/app/core/utils',
      
      // Shared
      'src/app/shared/components/loader',
      'src/app/shared/components/hello-world',
      'src/app/shared/directives',
      'src/app/shared/pipes',
      'src/app/shared/models',
      
      // Pages
      'src/app/pages/home',
      'src/app/pages/hello-world',
      
      // Assets
      'src/assets/images',
      'src/assets/styles',
      
      // Environments
      'src/environments'
    ];

    for (const folder of folders) {
      await fs.ensureDir(path.join(projectPath, folder));
    }
    spinner2.succeed(chalk.green('Folder structure created'));

    // Create files
    const spinner3 = ora('Creating project files...').start();
    await createProjectFiles(projectPath, projectName);
    spinner3.succeed(chalk.green('Project files created'));

    // Install dependencies
    const spinner4 = ora('Installing dependencies (this may take a few minutes)...').start();
    try {
      execSync('npm install --legacy-peer-deps', { cwd: projectPath, stdio: 'inherit' });
      spinner4.succeed(chalk.green('Dependencies installed successfully!'));
    } catch (error) {
      spinner4.fail(chalk.red('Failed to install dependencies'));
      console.log(chalk.yellow('\nPlease run manually:'));
      console.log(chalk.white(`  cd ${projectName}`));
      console.log(chalk.white(`  npm install --legacy-peer-deps\n`));
    }

    console.log(chalk.green.bold('\n✅ Project created successfully!\n'));
    console.log(chalk.cyan('📦 All Angular 21.0.2 dependencies installed!\n'));
    console.log(chalk.cyan('To get started:\n'));
    console.log(chalk.white(`  cd ${projectName}`));
    console.log(chalk.white(`  npm start`));
    console.log(chalk.white(`\n🌐 Development server will run at: http://localhost:4200\n`));

  } catch (error) {
    console.log(chalk.red(`\n❌ Error creating project: ${error.message}\n`));
    console.error(error.stack);
    process.exit(1);
  }
}

async function createProjectFiles(projectPath, projectName) {
  const templates = require('./templates-new-structure');
  
  // Package.json
  await fs.writeFile(
    path.join(projectPath, 'package.json'),
    templates.packageJson(projectName)
  );

  // Angular.json
  await fs.writeFile(
    path.join(projectPath, 'angular.json'),
    templates.angularJson(projectName)
  );

  // tsconfig.json
  await fs.writeFile(
    path.join(projectPath, 'tsconfig.json'),
    templates.tsConfig()
  );

  // tsconfig.app.json
  await fs.writeFile(
    path.join(projectPath, 'tsconfig.app.json'),
    templates.tsConfigApp()
  );

  // .gitignore
  await fs.writeFile(
    path.join(projectPath, '.gitignore'),
    templates.gitignore()
  );

  // README.md
  await fs.writeFile(
    path.join(projectPath, 'README.md'),
    templates.readme(projectName)
  );

  // src/index.html
  await fs.writeFile(
    path.join(projectPath, 'src/index.html'),
    templates.indexHtml(projectName)
  );

  // src/main.ts
  await fs.writeFile(
    path.join(projectPath, 'src/main.ts'),
    templates.mainTs()
  );

  // src/styles.scss
  await fs.writeFile(
    path.join(projectPath, 'src/styles.scss'),
    templates.stylesScss()
  );

  // Design tokens
  await fs.writeFile(
    path.join(projectPath, 'src/assets/styles/_variables.scss'),
    templates.designTokens()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/assets/styles/_mixins.scss'),
    templates.mixins()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/assets/styles/global.scss'),
    templates.globalStyles()
  );

  // src/app/app.config.ts
  await fs.writeFile(
    path.join(projectPath, 'src/app/app.config.ts'),
    templates.appConfig()
  );

  // src/app/app.component.ts
  await fs.writeFile(
    path.join(projectPath, 'src/app/app.component.ts'),
    templates.appComponent()
  );

  // src/app/app.component.html
  await fs.writeFile(
    path.join(projectPath, 'src/app/app.component.html'),
    templates.appComponentHtml()
  );

  // src/app/app.component.scss
  await fs.writeFile(
    path.join(projectPath, 'src/app/app.component.scss'),
    templates.appComponentScss()
  );

  // src/app/app.routes.ts
  await fs.writeFile(
    path.join(projectPath, 'src/app/app.routes.ts'),
    templates.appRoutes()
  );

  // === CORE - Services ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/core/services/api.service.ts'),
    templates.apiService()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/services/encryption.service.ts'),
    templates.encryptionService()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/services/loader.service.ts'),
    templates.loaderService()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/services/auth.service.ts'),
    templates.authService()
  );

  // === CORE - Guards ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/core/guards/auth.guard.ts'),
    templates.authGuard()
  );

  // === CORE - Interceptors ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/core/interceptors/auth.interceptor.ts'),
    templates.authInterceptor()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/interceptors/loader.interceptor.ts'),
    templates.loaderInterceptor()
  );

  // === CORE - Constants ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/core/constants/api-endpoints.ts'),
    templates.apiEndpoints()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/constants/app.constants.ts'),
    templates.appConstants()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/constants/regex.constants.ts'),
    templates.regexConstants()
  );

  // === CORE - Utils ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/core/utils/crypto.util.ts'),
    templates.cryptoUtil()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/utils/storage.util.ts'),
    templates.storageUtil()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/utils/date.util.ts'),
    templates.dateUtil()
  );

  // === SHARED - Components ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/components/loader/loader.component.ts'),
    templates.loaderComponentTs()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/components/loader/loader.component.html'),
    templates.loaderComponentHtml()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/components/loader/loader.component.scss'),
    templates.loaderComponentScss()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/components/hello-world/hello-world.component.ts'),
    templates.helloWorldComponentTs()
  );

  // === SHARED - Directives ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/directives/only-number.directive.ts'),
    templates.onlyNumberDirective()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/directives/debounce-click.directive.ts'),
    templates.debounceClickDirective()
  );

  // === SHARED - Pipes ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/pipes/mask.pipe.ts'),
    templates.maskPipe()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/pipes/capitalize.pipe.ts'),
    templates.capitalizePipe()
  );

  // === SHARED - Models ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/models/api-response.model.ts'),
    templates.apiResponseModel()
  );

  // === PAGES ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/pages/home/home.component.ts'),
    templates.homePageTs()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/pages/home/home.component.html'),
    templates.homePageHtml()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/pages/home/home.routes.ts'),
    templates.homePageRoutes()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/pages/hello-world/hello-world.page.ts'),
    templates.helloWorldPageTs()
  );

  // src/environments
  await fs.writeFile(
    path.join(projectPath, 'src/environments/environment.ts'),
    templates.environment()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/environments/environment.prod.ts'),
    templates.environmentProd()
  );
}

module.exports = { createProject };
