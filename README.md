# Phutran Info - Angular Micro Frontend Architecture

A modern micro frontend architecture built with Angular, Nx workspace, and Module Federation.

## Architecture Overview

This workspace demonstrates a micro frontend architecture with the following structure:

### Applications

- **app-shell** - Host application that serves as the container
- **remote-apps** - Independent micro frontends that can be loaded dynamically
  - Dashboard
  - User Management
  - Analytics
  - Settings

### Shared Libraries

- **@phutran/directives** - Reusable Angular directives
  - Typing Animation
  - Scroll Detection
  - Lazy Loading
- **@phutran/ui** - UI component library
- **@phutran/utils** - Shared utilities and helpers
- **@phutran/models** - Shared interfaces and types
- **@phutran/services** - Common services

## Technical Stack

- **Framework**: Angular 17+
- **Build System**: Nx Workspace
- **Module Federation**: Webpack 5 
- **State Management**: NgRx
- **Styling**: TailwindCSS
- **Testing**: Jest + Cypress

## Getting Started

1. Install dependencies:
```sh
npm install
```

2. Start the development server:
```sh
npx nx serve app-shell
```

3. Start remote apps (in separate terminals):
```sh
npx nx serve dashboard
npx nx serve user-management
npx nx serve analytics
npx nx serve settings
```

## Development Workflow

### Generate New Components/Features

```sh
# Generate a new micro frontend app
npx nx g @nx/angular:app new-feature

# Generate a new shared library
npx nx g @nx/angular:lib my-shared-lib

# Generate components/services in existing projects
npx nx g @nx/angular:component my-component --project=app-shell
```

### Build for Production

```sh
# Build all apps and libraries
npx nx run-many --target=build --all

# Build specific app
npx nx build app-shell
```

## Module Federation Setup

Each micro frontend is configured as a remote module that can be loaded dynamically by the shell application. The federation configuration can be found in the `webpack.config.js` of each application.

### Shell Configuration
- Manages routing and authentication
- Loads remote modules dynamically
- Provides shared dependencies

### Remote Apps Configuration
- Exposes specific modules/components
- Maintains independent deployment
- Shares common dependencies

## CI/CD Pipeline

The project uses Nx Cloud for:
- Distributed task execution
- Caching
- Affected commands
- Deploy previews

## Performance Optimization

- Lazy loading of routes and modules
- Shared dependencies management
- Caching strategies
- Bundle size optimization

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `npx nx affected:test`
4. Submit a pull request

## Useful Commands

```sh
# View dependency graph
npx nx graph

# Run tests
npx nx affected:test

# Run e2e tests
npx nx affected:e2e

# Format code
npx nx format:write

# Check affected apps/libs
npx nx affected:apps
npx nx affected:libs
```

## Learn More

- [Nx Documentation](https://nx.dev)
- [Angular Module Federation](https://www.angular.io/guide/webpack#module-federation)
- [Micro Frontend Architecture](https://micro-frontends.org)

## Support

Join our community:
- [Discord](https://discord.gg/yourserver)
- [GitHub Discussions](https://github.com/yourusername/phutraninfo/discussions)
