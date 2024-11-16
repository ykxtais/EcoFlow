interface WatsonAssistantChatOptions {
    integrationID: string;
    region: string;
    serviceInstanceID: string;
    onLoad: (instance: any) => void;
}

interface Window {
    watsonAssistantChatOptions?: WatsonAssistantChatOptions;
}
