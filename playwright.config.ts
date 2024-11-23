import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run preview',
    timeout: 240000,
    port: 4173
  },
  testDir: 'e2e',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
