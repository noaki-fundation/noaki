export {};

declare global {
    interface Window {
        gtag: (element: string, element: string|undefined, data: {
            page_path?: string;
            event_category?: string;
            event_label?: string;
            value?: string;
        }) => void;
        dataLayer: {event: string, page: string}[];
        opera?: string;
    }
}