"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionApi = void 0;
class EvolutionApi {
    constructor() {
        this.name = 'evolutionApi';
        this.displayName = 'Evolution API';
        this.documentationUrl = 'https://doc.evolution-api.com';
        this.properties = [
            {
                displayName: 'Server URL',
                name: 'serverUrl',
                type: 'string',
                default: 'http://localhost:8080',
                placeholder: 'https://your-evolution-api.com',
                description: 'The base URL of your Evolution API server',
            },
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                description: 'Global API key for Evolution API authentication',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    apikey: '={{$credentials.apiKey}}',
                },
            },
        };
    }
}
exports.EvolutionApi = EvolutionApi;
