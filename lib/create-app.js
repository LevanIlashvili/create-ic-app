const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { execSync } = require('child_process');

async function createApp(projectName, targetPath) {
  const templatePath = path.join(__dirname, '../template');
  
  console.log(chalk.blue(`\n📁 Creating IC app in ${chalk.bold(targetPath)}`));
  
  // Step 1: Copy template
  const copySpinner = ora('Copying template files...').start();
  try {
    await fs.copy(templatePath, targetPath);
    copySpinner.succeed('Template files copied');
  } catch (error) {
    copySpinner.fail('Failed to copy template files');
    throw error;
  }

  // Step 2: Update package.json and create .env from .env.example
  const updateSpinner = ora('Updating project configuration...').start();
  try {
    const packageJsonPath = path.join(targetPath, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);
    
    // Update the name
    packageJson.name = projectName;
    
    // Update any other project-specific fields
    if (packageJson.description) {
      packageJson.description = `An Internet Computer application - ${projectName}`;
    }
    
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    // Create .env from .env.example if it exists
    const envExamplePath = path.join(targetPath, '.env.example');
    const envPath = path.join(targetPath, '.env');
    
    if (await fs.pathExists(envExamplePath)) {
      await fs.copy(envExamplePath, envPath);
    }
    
    updateSpinner.succeed('Project configuration updated');
  } catch (error) {
    updateSpinner.fail('Failed to update project configuration');
    throw error;
  }

  // Step 3: Install dependencies
  const installSpinner = ora('Installing dependencies...').start();
  try {
    // Change to project directory
    process.chdir(targetPath);
    
    // Install npm dependencies
    execSync('npm install', { stdio: 'pipe' });
    
    installSpinner.succeed('Dependencies installed');
  } catch (error) {
    installSpinner.fail('Failed to install dependencies');
    // Don't throw here, we can still show success with manual install instructions
    console.log(chalk.yellow('\n⚠️  You can install dependencies manually by running:'));
    console.log(chalk.gray(`   cd ${projectName} && npm install`));
  }

  // Step 4: Show success message and instructions
  showSuccessMessage(projectName);
}

function showSuccessMessage(projectName) {
  console.log(chalk.green(`\n🎉 Successfully created IC app: ${chalk.bold(projectName)}`));
  console.log(chalk.cyan('\n📋 Get started with these commands:\n'));
  
  console.log(chalk.gray('   cd'), chalk.blue(projectName));
  console.log(chalk.gray('   ./deploy.sh'));
  console.log();
  
  console.log(chalk.white('📚 What you get:'));
  console.log(chalk.gray('   ✓ Internet Computer backend (Motoko)'));
  console.log(chalk.gray('   ✓ React frontend with TypeScript'));
  console.log(chalk.gray('   ✓ DFX configuration ready'));
  console.log(chalk.gray('   ✓ Deployment scripts included'));
  console.log(chalk.gray('   ✓ Environment variables configured (.env)'));
  console.log(chalk.gray('   ✓ Everything ready to deploy'));
  console.log();
  
  console.log(chalk.white('🚀 Quick commands:'));
  console.log(chalk.gray('   ./deploy.sh          - Deploy to local IC replica'));
  console.log(chalk.gray('   ./deploy-ic.sh       - Deploy to IC mainnet'));
  console.log(chalk.gray('   npm run dev          - Start development server'));
  console.log(chalk.gray('   cat README.md        - Full documentation'));
  console.log();
  
  console.log(chalk.green('Happy coding! 🎯'));
  console.log(chalk.gray('Made with ❤️  for the IC community'));
}

module.exports = createApp; 