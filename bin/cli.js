#!/usr/bin/env node

const { program } = require('commander');
const { createProject } = require('../src/create-project');
const chalk = require('chalk');

program
  .version('1.0.0')
  .description('CLI tool to generate Angular 21.0.2 boilerplate projects');

program
  .command('create <project-name>')
  .description('Create a new Angular 21.0.2 project')
  .action((projectName) => {
    console.log(chalk.blue.bold('\n🚀 Creating Angular 21.0.2 Boilerplate Project...\n'));
    createProject(projectName);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
