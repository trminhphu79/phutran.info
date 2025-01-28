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

// webpack.config.js
const DOMAIN = process.env.DOMAIN || 'http://phutran.info.vn';

const config: ModuleFederationConfig = {
  name: 'app-shell',
  remotes: [
    ['home', `${DOMAIN}/home/remoteEntry.mjs`],
    ['blog', `${DOMAIN}/blog/remoteEntry.mjs`],
    ['admin', `${DOMAIN}/admin/remoteEntry.mjs`],
  ],
  // shared: getShared(),
};

export default config;
