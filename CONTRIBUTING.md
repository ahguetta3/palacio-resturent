# Contributing to Palacio

First off, thank you for considering contributing to Palacio! We're excited to have you join our community of developers working to create the best hotel management system.

## Code of Conduct
We are committed to providing a welcoming and inspiring community for all. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to help us create a positive environment for everyone.

## How Can I Contribute?

### Reporting Bugs
Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title (e.g., "Guest check-in fails when using Safari browser")
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Include relevant details about your configuration and environment:
  * Browser version (if applicable)
  * Node.js version
  * MongoDB version
  * Operating system
* Include screenshots or error logs when possible

### Suggesting Enhancements
We love your input! We want to make Palacio better for everyone. When you are creating an enhancement suggestion, please:

* Use a clear and descriptive title
* Provide a detailed description of the proposed feature
* Explain why this enhancement would be useful to most Palacio users
* List some examples of how it would be used
* Include mockups or diagrams if applicable

### Pull Requests
1. Fork the repository and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code follows our style guidelines
6. Include a clear description of your changes

## Development Setup
1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and configure
4. Start the development server: `npm run dev`
5. Run tests: `npm test`

## Style Guides

### Git Commit Messages
* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
  * 🎨 `:art:` when improving the format/structure of the code
  * 🐛 `:bug:` when fixing a bug
  * ✨ `:sparkles:` when adding a new feature
  * 📝 `:memo:` when writing docs
  * 🚀 `:rocket:` when improving performance

### JavaScript Styleguide
* Use ES6+ features
* Use 2 spaces for indentation
* Use semicolons
* Use single quotes for strings
* Use template literals for string interpolation
* Use meaningful variable names
* Comment your code when necessary
* Follow the airbnb-base style guide

### Testing Guidelines
* Write tests for all new features and bug fixes
* Aim for 80% code coverage
* Use descriptive test names
* Follow the Arrange-Act-Assert pattern
* Mock external services and databases

## Project Structure
```
palacio/
├── src/
│   ├── api/        # API routes and controllers
│   ├── models/     # Database models
│   ├── services/   # Business logic
│   └── utils/      # Helper functions
├── tests/          # Test files
├── docs/           # Documentation
└── config/         # Configuration files
```

## Additional Notes
* Please don't include any sensitive credentials in your contributions
* Consider adding tests for new features
* Update documentation when necessary
* Feel free to ask for help if you're stuck

Thank you for contributing to Palacio! 🏰
