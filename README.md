# Create IC App

**Make IC development as easy as React development** 🚀

Create Internet Computer applications with zero configuration - just like `create-react-app` but for the IC ecosystem.

```bash
npx @blockcraft/create-ic-app my-awesome-app
cd my-awesome-app
./deploy.sh
```

That's it! You now have a working IC app with React frontend and Motoko backend. ✨

## 🎯 Why Create IC App?

**The Problem:** Setting up an IC project from scratch is complex - you need to configure dfx.json, set up React with TypeScript, configure environment variables, create deployment scripts, and more.

**The Solution:** One command that gives you everything you need to start building on the Internet Computer.

### Before vs After

**Before (Manual Setup):**
```bash
# 😰 Manual setup takes 30+ minutes
mkdir my-app && cd my-app
dfx new backend --type=motoko
npm create vite@latest frontend -- --template react-ts
# ... configure dfx.json
# ... set up environment variables
# ... create deployment scripts
# ... configure build pipeline
# ... and much more configuration
```

**After (With Create IC App):**
```bash
# 🎉 Zero-config setup in 30 seconds
npx @blockcraft/create-ic-app my-app
cd my-app
./deploy.sh
```

## 🚀 Quick Start

### Create a New IC App

```bash
# Interactive mode - prompts for project name
npx @blockcraft/create-ic-app

# Direct mode - specify project name
npx @blockcraft/create-ic-app my-ic-app

# Navigate and deploy
cd my-ic-app
./deploy.sh
```

### What You Get

Every project created includes:

✅ **Internet Computer Backend**
- Motoko canister ready to deploy
- Candid interface generation
- DFX configuration

✅ **React Frontend**
- TypeScript setup
- Vite build system
- IC agent integration
- Tailwind CSS configured

✅ **Development Tools**
- Local deployment script (`./deploy.sh`)
- Mainnet deployment script (`./deploy-ic.sh`)
- Environment variable setup
- Hot reload development

✅ **Zero Configuration**
- Everything works out of the box
- No complex setup required
- Production-ready structure

## 📋 Requirements

- **Node.js** 16+ ([Download](https://nodejs.org/))
- **DFX** (Internet Computer SDK) ([Install Guide](https://internetcomputer.org/docs/current/developer-docs/getting-started/install/))

## 🛠️ Usage Examples

### Basic Usage
```bash
npx @blockcraft/create-ic-app my-first-dapp
```

### Advanced Usage
```bash
# Create app in specific directory
npx @blockcraft/create-ic-app ./projects/my-dapp

# Create app with specific name
npx @blockcraft/create-ic-app "my-awesome-web3-app"
```

## 🏗️ What Gets Created

```
my-ic-app/
├── src/
│   ├── frontend/          # React TypeScript app
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── ...
│   └── backend/           # Motoko canister
│       └── main.mo
├── deploy.sh              # Local deployment
├── deploy-ic.sh           # Mainnet deployment  
├── dfx.json              # DFX configuration
├── package.json          # Dependencies
├── .env                  # Environment variables
├── .env.example          # Environment template
└── README.md             # Project documentation
```

## 🔄 Development Workflow

```bash
# 1. Create your app
npx @blockcraft/create-ic-app my-app
cd my-app

# 2. Start local development
./deploy.sh

# 3. Make changes to your code
# Edit src/frontend/ or src/backend/

# 4. Redeploy locally
./deploy.sh

# 5. Deploy to mainnet when ready
./deploy-ic.sh
```

## 🌐 Deployment Options

### Local Development
```bash
./deploy.sh
```
- Starts local IC replica
- Deploys to local network
- Perfect for development and testing

### IC Mainnet
```bash
./deploy-ic.sh
```
- Deploys to Internet Computer mainnet
- Requires ICP cycles
- Production-ready deployment

## ⚡ Features

- **🚀 Zero Configuration** - Works out of the box
- **📦 Complete Stack** - Frontend + Backend + Deployment
- **🔧 Development Ready** - Hot reload and local testing
- **🌐 Production Ready** - Mainnet deployment scripts
- **📱 Modern Stack** - React, TypeScript, Vite, Tailwind
- **🔗 IC Integration** - Agent setup, Candid generation
- **📚 Well Documented** - README and examples included

## 🆚 Comparison

| Feature | Manual Setup | Create IC App |
|---------|-------------|---------------|
| **Time to start** | 30+ minutes | 30 seconds |
| **Configuration** | Complex | Zero config |
| **Best practices** | Manual research | Built-in |
| **Deployment** | Manual scripts | Ready scripts |
| **Documentation** | You write it | Included |
| **Updates** | Manual | Template updates |

## 🤝 Contributing

We welcome contributions! Here's how to help:

### Development Setup
```bash
# Clone the repository
git clone https://github.com/LevanIlashvili/create-ic-app.git
cd create-ic-app

# Install dependencies
npm install

# Test locally
npm link
create-ic-app test-app
```

### Template Updates
The template is in the `template/` directory. Update it with:
- New best practices
- Security improvements
- Feature additions
- Bug fixes

### Reporting Issues
- 🐛 Bug reports: [GitHub Issues](https://github.com/LevanIlashvili/create-ic-app/issues)
- 💡 Feature requests: [GitHub Discussions](https://github.com/LevanIlashvili/create-ic-app/discussions)

## 📚 Learn More

- **[Internet Computer](https://internetcomputer.org/)** - The IC ecosystem
- **[DFX Documentation](https://internetcomputer.org/docs/current/references/cli-reference/)** - Command line reference
- **[Motoko](https://internetcomputer.org/docs/current/motoko/intro/)** - Backend language
- **[React](https://react.dev/)** - Frontend framework
- **[IC Agent](https://github.com/dfinity/agent-js)** - JavaScript IC integration

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [create-react-app](https://create-react-app.dev/)
- Built for the [Internet Computer](https://internetcomputer.org/) community
- Made with ❤️ for Web3 developers

---

**Start building on the Internet Computer today!** 🎯

```bash
npx @blockcraft/create-ic-app my-next-big-idea
``` 