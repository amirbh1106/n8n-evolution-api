import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class EvolutionApi implements ICredentialType {
	name = 'evolutionApi';
	displayName = 'Evolution API';
	documentationUrl = 'https://doc.evolution-api.com';
	properties: INodeProperties[] = [
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

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				apikey: '={{$credentials.apiKey}}',
			},
		},
	};
}
