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
    const spinner2 = ora('Creating folder structure (Atomic Design + MVC)...').start();
    const folders = [
      // Core
      'src/app/core/models',
      'src/app/core/services',
      'src/app/core/guards',
      'src/app/core/interceptors',
      
      // UI - Atomic Design
      'src/app/ui/atoms/button',
      'src/app/ui/atoms/input',
      'src/app/ui/atoms/card',
      'src/app/ui/molecules/sidebar',
      'src/app/ui/molecules/tabs',
      'src/app/ui/molecules/login-form',
      'src/app/ui/organisms/dashboard-layout',
      'src/app/ui/organisms/auth-layout',
      
      // Pages
      'src/app/pages/login',
      'src/app/pages/dashboard',
      'src/app/pages/user',
      'src/app/pages/admin',
      
      // Shared
      'src/app/shared/directives',
      'src/app/shared/pipes',
      'src/app/shared/utils',
      'src/app/shared/constants',
      
      // Assets and Environments
      'src/assets/images',
      'src/assets/styles',
      'src/environments'
    ];

    for (const folder of folders) {
      await fs.ensureDir(path.join(projectPath, folder));
    }
    spinner2.succeed(chalk.green('Folder structure created (Atomic Design + MVC)'));

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
    process.exit(1);
  }
}

async function createProjectFiles(projectPath, projectName) {
  const templates = require('./templates');
  
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

  // === CORE - Models ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/core/models/user.model.ts'),
    templates.userModel()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/models/auth.model.ts'),
    templates.authModel()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/models/index.ts'),
    templates.modelsIndex()
  );

  // === CORE - Services ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/core/services/auth.service.ts'),
    templates.authService()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/services/index.ts'),
    templates.servicesIndex()
  );

  // === CORE - Guards ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/core/guards/auth.guard.ts'),
    templates.authGuard()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/guards/role.guard.ts'),
    templates.roleGuard()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/core/guards/index.ts'),
    templates.guardsIndex()
  );

  // === UI - Atoms ===
  await createAtomicComponent(projectPath, 'button', templates);
  await createAtomicComponent(projectPath, 'input', templates);
  await createAtomicComponent(projectPath, 'card', templates);

  // === UI - Molecules ===
  await createMoleculeComponent(projectPath, 'sidebar', templates);
  await createMoleculeComponent(projectPath, 'tabs', templates);
  await createMoleculeComponent(projectPath, 'login-form', templates);

  // === UI - Organisms ===
  await createOrganismComponent(projectPath, 'dashboard-layout', templates);
  await createOrganismComponent(projectPath, 'auth-layout', templates);

  // === Pages ===
  await createPageComponent(projectPath, 'login', templates);
  await createPageComponent(projectPath, 'dashboard', templates);
  await createPageComponent(projectPath, 'user', templates);
  await createPageComponent(projectPath, 'admin', templates);

  // === Shared - Constants ===
  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/constants/roles.ts'),
    templates.rolesConstant()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/app/shared/constants/index.ts'),
    templates.constantsIndex()
  );

  // src/environments
  await fs.writeFile(
    path.join(projectPath, 'src/environments/environment.ts'),
    templates.environment()
  );

  await fs.writeFile(
    path.join(projectPath, 'src/environments/environment.development.ts'),
    templates.environmentDev()
  );
}

async function createAtomicComponent(projectPath, name, templates) {
  const basePath = path.join(projectPath, `src/app/ui/atoms/${name}`);
  await fs.writeFile(path.join(basePath, `${name}.component.ts`), templates[`${name}ComponentTs`]());
  await fs.writeFile(path.join(basePath, `${name}.component.html`), templates[`${name}ComponentHtml`]());
  await fs.writeFile(path.join(basePath, `${name}.component.scss`), templates[`${name}ComponentScss`]());
}

async function createMoleculeComponent(projectPath, name, templates) {
  const basePath = path.join(projectPath, `src/app/ui/molecules/${name}`);
  await fs.writeFile(path.join(basePath, `${name}.component.ts`), templates[`${name}ComponentTs`]());
  await fs.writeFile(path.join(basePath, `${name}.component.html`), templates[`${name}ComponentHtml`]());
  await fs.writeFile(path.join(basePath, `${name}.component.scss`), templates[`${name}ComponentScss`]());
}

async function createOrganismComponent(projectPath, name, templates) {
  const basePath = path.join(projectPath, `src/app/ui/organisms/${name}`);
  await fs.writeFile(path.join(basePath, `${name}.component.ts`), templates[`${name}ComponentTs`]());
  await fs.writeFile(path.join(basePath, `${name}.component.html`), templates[`${name}ComponentHtml`]());
  await fs.writeFile(path.join(basePath, `${name}.component.scss`), templates[`${name}ComponentScss`]());
}

async function createPageComponent(projectPath, name, templates) {
  const basePath = path.join(projectPath, `src/app/pages/${name}`);
  await fs.writeFile(path.join(basePath, `${name}.component.ts`), templates[`${name}PageTs`]());
  await fs.writeFile(path.join(basePath, `${name}.component.html`), templates[`${name}PageHtml`]());
  await fs.writeFile(path.join(basePath, `${name}.component.scss`), templates[`${name}PageScss`]());
}

module.exports = { createProject };
