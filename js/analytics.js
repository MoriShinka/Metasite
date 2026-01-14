// Analytics - Event Tracking

const events = [];

export function initAnalytics() {
    console.log('📊 Analytics initialized');

    // Track page view
    trackEvent('page_view', {
        path: window.location.pathname,
        referrer: document.referrer
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
        const scrollDepth = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            if (scrollDepth >= 25 && scrollDepth < 50) {
                trackEvent('scroll_depth', { depth: 25 });
            } else if (scrollDepth >= 50 && scrollDepth < 75) {
                trackEvent('scroll_depth', { depth: 50 });
            } else if (scrollDepth >= 75) {
                trackEvent('scroll_depth', { depth: 75 });
            }
        }
    });
}

export function trackEvent(eventName, properties = {}) {
    const event = {
        name: eventName,
        properties,
        timestamp: new Date().toISOString(),
        url: window.location.href
    };

    events.push(event);

    // Log to console in development
    if (import.meta.env.DEV) {
        console.log('📈 Event:', eventName, properties);
    }

    // Send to analytics service (implement based on your choice)
    // Example: Google Analytics 4
    // if (window.gtag) {
    //   window.gtag('event', eventName, properties);
    // }

    // Example: Plausible
    // if (window.plausible) {
    //   window.plausible(eventName, { props: properties });
    // }
}

export function getEvents() {
    return events;
}
