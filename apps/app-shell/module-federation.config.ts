import {
  ModuleFederationConfig,
  SharedFunction,
  SharedLibraryConfig,
} from '@nx/module-federation';

const shared: Record<string, SharedLibraryConfig> = Object.freeze({
  '@angular/core': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  '@angular/common': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  '@angular/router': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  '@angular/platform-browser-dynamic': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  '@angular/platform-browser': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  '@angular/forms': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  'zone.js': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
  rxjs: {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  },
});

const getShared = (): SharedFunction => {
  return (libraryName: string, sharedConfig: SharedLibraryConfig) => {
    if (shared[libraryName]) {
      return {
        ...sharedConfig,
        ...shared[libraryName],
      };
    }
    return false;
  };
};

const config: ModuleFederationConfig = {
  name: 'app-shell',
  remotes: [
    ['home', 'http://localhost:8081/remoteEntry.mjs'],
    ['blog', 'http://localhost:8082/remoteEntry.mjs'],
    ['admin', 'http://localhost:8083/remoteEntry.mjs'],
  ],
  shared: getShared(),
};

export default config;
