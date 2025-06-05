'use client'; // Only needed for App Router

import Script from 'next/script';
import { useEffect } from 'react';

const ChatlioWidget = () => {
    useEffect(() => {
        // Avoid duplicate widget injection
        if (typeof window !== 'undefined' && !document.querySelector('chatlio-widget')) {
            const widget = document.createElement('chatlio-widget');
            widget.setAttribute('widgetid', '8e07c579-2759-4627-5f2f-98fdaee695fc');
            widget.setAttribute('disable-favicon-badge', '');
            document.body.appendChild(widget);
        }
    }, []);

    return (
        <Script
            src="https://js.chatlio.com/widget.js"
            strategy="lazyOnload"
        />
    );
};

export default ChatlioWidget;
