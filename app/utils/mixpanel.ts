import mixpanel from "mixpanel-browser";

// Initialize Mixpanel
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "", {
  debug: process.env.NODE_ENV === "development",
  track_pageview: true,
  persistence: "localStorage",
});

// Utility functions for tracking
export const track = (eventName: string, properties?: Record<string, any>) => {
  mixpanel.track(eventName, properties);
};

export const identify = (userId: string) => {
  mixpanel.identify(userId);
};

export const setUserProperties = (properties: Record<string, any>) => {
  mixpanel.people.set(properties);
};

export default mixpanel;
