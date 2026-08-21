export const GA_MEASUREMENT_ID = "G-377NG4TXY";

export type GAEventName =
  | "join_creator_clicked"
  | "work_with_korvio_clicked"
  | "creator_form_clicked"
  | "brand_inquiry_submitted"
  | "email_clicked"
  | "instagram_clicked"
  | "linkedin_clicked"
  | "x_clicked";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Send pageview to GA4 on route transitions
 */
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Track custom GA4 events safely
 */
export const trackEvent = (
  eventName: GAEventName,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
};
