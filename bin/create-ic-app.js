#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs-extra');
const ora = require('ora');
const prompts = require('prompts');
const createApp = require('../lib/create-app');

const packageJson = require('../package.json');

program
  .name('create-ic-app')
  .version(packageJson.version)
  .description('Create Internet Computer applications with zero configuration')
  .argument('[project-name]', 'name of the project to create')
  .action(async (projectName) => {
    console.log(chalk.cyan('🚀 Welcome to Create IC App!'));
    console.log(chalk.gray('Making IC development as easy as React development\n'));

    let finalProjectName = projectName;

    // If no project name provided, prompt for it
    if (!finalProjectName) {
      const response = await prompts({
        type: 'text',
        name: 'projectName',
        message: 'What would you like to name your IC app?',
        initial: 'my-ic-app',
        validate: (value) => {
          if (!value) return 'Project name is required';
          if (!/^[a-z0-9-_]+$/i.test(value)) {
            return 'Project name can only contain letters, numbers, hyphens, and underscores';
          }
          return true;
        }
      });

      if (!response.projectName) {
        console.log(chalk.red('\n❌ Operation cancelled'));
        process.exit(1);
      }

      finalProjectName = response.projectName;
    }

    const targetPath = path.resolve(process.cwd(), finalProjectName);

    // Check if directory already exists
    if (await fs.pathExists(targetPath)) {
      console.log(chalk.red(`\n❌ Directory "${finalProjectName}" already exists!`));
      console.log(chalk.gray('Please choose a different name or remove the existing directory.\n'));
      process.exit(1);
    }

    try {
      await createApp(finalProjectName, targetPath);
    } catch (error) {
      console.error(chalk.red('\n❌ Failed to create IC app:'), error.message);
      process.exit(1);
    }
  });

program.parse(); 