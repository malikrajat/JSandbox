# Electron Angular Application

A modern desktop application built with Electron and Angular, combining the power of web technologies with native desktop capabilities.

## 🚀 Features

- Cross-platform desktop application
- Built with Angular 19.1
- Modern and responsive UI
- Native desktop integration
- Hot reload support during development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [project-name]
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development

Start the development server:
```bash
ng serve
```
The application will be available at `http://localhost:4200/`

To run the Electron application in development mode:
```bash
npm run electron:serve
```

## 🏗️ Building

Build for production:
```bash
npm run electron:build
```

This will create distributables in the `dist/` directory.

## 🧪 Testing

Run unit tests:
```bash
ng test
```

Run end-to-end tests:
```bash
ng e2e
```

## 📦 Available Scripts

- `ng serve` - Start the Angular development server
- `ng build` - Build the Angular application
- `ng test` - Run unit tests
- `ng e2e` - Run end-to-end tests
- `electron:serve` - Run the application in Electron development mode
- `electron:build` - Build the application for distribution

## 🏗️ Project Structure

```
├── src/                   # Source files
│   ├── app/              # Angular application files
│   ├── assets/           # Static assets
│   └── electron/         # Electron main process files
├── dist/                 # Compiled files
└── e2e/                  # End-to-end tests
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - *Initial work* - [YourGithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Electron team for making desktop development easier
- All contributors who have helped this project grow

---
⭐️ If you found this project useful, please consider giving it a star on GitHub!
