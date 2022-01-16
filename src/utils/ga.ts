declare global {
  interface Window {
    gtag?: any;
  }
}

const shouldLog = () => {
  return (
    !window.gtag ||
    !process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ||
    process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"
  );
};

export const logGoogleAnalyticsPageView = (path: string) => {
  if (!shouldLog) {
    return;
  }

  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: path,
  });
};

interface GAEventArgs {
  action: string;
  category?: string;
  label?: string;
  value?: number; // Not neggative integer
}

export const logGoogleAnalyticsEvent = ({
  action,
  category,
  label,
  value,
}: GAEventArgs) => {
  if (!shouldLog) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
