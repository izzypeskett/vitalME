import { Grepcaptcha } from './grecaptcha.model';

export interface Environment {
  production: boolean;
  name: string;

  // Used for mock onboarding
  providerApiKey: string;
  meecoSubscriptionKey: string;

  // Recaptcha
  recaptchaEnabled: boolean;

  // airbrake: {
  //   projectId: number;
  //   projectKey: string;
  // };
  // analytics
  // matomo: {
  //   siteId: number;
  // };
}

declare global {
  interface Window {
    API_CONFIG: {
      keystoreApiBasePath: string;
      vaultApiBasePath: string;
      // connectURL: string;
      // downloaderApiBasePath: string;
      // passphraseApiBasePath: string;
    };
    // Google recaptcha
    grecaptcha: Grepcaptcha;
    onGrecaptchaLoaded: () => void;
  }
}
