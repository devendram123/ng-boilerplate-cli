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
      'src/app',
      'src/app/components',
      'src/app/services',
      'src/app/models',
      'src/app/guards',
      'src/app/interceptors',
      'src/assets',
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
      execSync('npm install', { cwd: projectPath, stdio: 'ignore' });
      spinner4.succeed(chalk.green('Dependencies installed'));
    } catch (error) {
      spinner4.warn(chalk.yellow('Dependencies installation skipped. Run npm install manually.'));
    }

    console.log(chalk.green.bold('\n✅ Project created successfully!\n'));
    console.log(chalk.cyan('To get started:\n'));
    console.log(chalk.white(`  cd ${projectName}`));
    console.log(chalk.white(`  npm start\n`));

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

  // src/styles.css
  await fs.writeFile(
    path.join(projectPath, 'src/styles.css'),
    templates.stylesCss()
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
    templates.appComponentHtml(projectName)
  );

  // src/app/app.component.css
  await fs.writeFile(
    path.join(projectPath, 'src/app/app.component.css'),
    templates.appComponentCss()
  );

  // src/app/app.routes.ts
  await fs.writeFile(
    path.join(projectPath, 'src/app/app.routes.ts'),
    templates.appRoutes()
  );

  // src/environments/environment.ts
  await fs.writeFile(
    path.join(projectPath, 'src/environments/environment.ts'),
    templates.environment()
  );

  // src/environments/environment.development.ts
  await fs.writeFile(
    path.join(projectPath, 'src/environments/environment.development.ts'),
    templates.environmentDev()
  );
}

module.exports = { createProject };
