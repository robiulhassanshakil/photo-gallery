import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    PrivacyScreen: {
      enable: true,
    },
  },
};

export default config;
