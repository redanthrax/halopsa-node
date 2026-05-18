import { INodeProperties } from 'n8n-workflow';

export const requestDescription: INodeProperties[] = [
	{
		displayName: 'Method',
		name: 'method',
		type: 'options',
		options: [
			{ name: 'GET', value: 'GET' },
			{ name: 'POST', value: 'POST' },
			{ name: 'PUT', value: 'PUT' },
			{ name: 'DELETE', value: 'DELETE' },
		],
		default: 'GET',
		required: true,
		displayOptions: {
			show: {
				resource: ['customApi'],
				operation: ['request'],
			},
		},
		description: 'HTTP method for the request',
	},
	{
		displayName: 'Endpoint',
		name: 'endpoint',
		type: 'string',
		default: '/Ticket',
		required: true,
		displayOptions: {
			show: {
				resource: ['customApi'],
				operation: ['request'],
			},
		},
		placeholder: '/Ticket',
		description:
			'API path relative to /api (e.g. /Ticket, /ClientContract/5). A leading /api/ prefix is stripped automatically.',
	},
	{
		displayName: 'Query Parameters',
		name: 'queryParameters',
		type: 'json',
		default: {},
		displayOptions: {
			show: {
				resource: ['customApi'],
				operation: ['request'],
			},
		},
		description:
			'Query string parameters as a JSON object, e.g. {"count": 25, "client_id": 70}. Supports expressions.',
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'json',
		default: {},
		displayOptions: {
			show: {
				resource: ['customApi'],
				operation: ['request'],
				method: ['POST', 'PUT', 'DELETE'],
			},
		},
		description:
			'Request body as JSON (object or array). HaloPSA often expects an array for create/update endpoints, e.g. [{"summary": "Example"}].',
	},
];
