import { INodeProperties } from 'n8n-workflow';

export const getDescription: INodeProperties[] = [
	{ displayName: 'No Parameters', name: 'notice', type: 'notice',
		displayOptions: { show: { resource: ['securityChecks'], operation: ['get'] } },
		default: '', description: 'Runs GET /SecurityCheck' },
];
