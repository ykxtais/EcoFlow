"use client";
import { useEffect } from "react";

export default function ChatbotEve() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
        script.async = true;

        script.onload = () => {
            window.watsonAssistantChatOptions = {
                integrationID: "b2b81bfc-d2a4-4419-a320-8e75be012e0e",
                region: "au-syd",
                serviceInstanceID: "7667f19c-2890-4ce5-8c56-d26e9fd1ddea",
                onLoad: function (instance) {
                    instance.render();
                },
            };
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h1>Carregando Eve!</h1>
        </div>
    );
}
