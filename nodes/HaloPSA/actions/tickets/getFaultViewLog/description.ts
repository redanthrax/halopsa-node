import { INodeProperties } from 'n8n-workflow';

export const getFaultViewLogDescription: INodeProperties[] = [
	{
		displayName: 'Notice',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: { resource: ['tickets'], operation: ['getFaultViewLog'] } },
		default: '',
		description: 'Returns ticket view log data from GET /FaultViewLog (no query parameters in OpenAPI)',
	},
];
