export const GA_TRAKING_ID = process.env.NEXT_PUBLIC_GA_TRAKING_ID;

export const pageview = (url: string): void => {
    console.log('page view: ', url);

    window.gtag('config', GA_TRAKING_ID, {
        page_path: url
    })
}

interface GtagEvent {
    action: string;
    category: string;
    label: string;
    value: string;
}

export const event = ({ action, category, label, value }: GtagEvent): void => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value
    })
}