// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
    const onLoadScriptRef = useRef();

    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_5300f') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        autosize: true,
                        symbol: "BITSTAMP:BTCUSD",
                        interval: "D",
                        timezone: "Etc/UTC",
                        theme: "light",
                        style: "1",
                        locale: "en",
                        enable_publishing: false,
                        backgroundColor: "rgba(0, 0, 0, 1)",
                        allow_symbol_change: true,
                        // studies: ["STD;24h%Volume", "STD;Accumulation_Distribution", "STD;Average%Day%Range", "STD;Average_True_Range", "STD;Balance%1of%1Power"],
                        container_id: "tradingview_5300f"
                    });
                }
            }
        },
        []
    );

    return (
        <div className='tradingview-widget-container' style={{ height: "100%", width: "100%" }}>
            <div id='tradingview_5300f' style={{ height: "440px", width: "100%" }} />
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
            </div>
        </div>
    );
}
