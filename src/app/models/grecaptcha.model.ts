interface RenderOptions {
  sitekey?: string;
  callback?: (captchaResponse: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
}

export interface Grepcaptcha {
  reset: (widgetId?: number) => void;
  render: (element: HTMLElement, RenderOptions) => number;
}
