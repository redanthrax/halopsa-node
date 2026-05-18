import { INodeProperties } from 'n8n-workflow';

export const lansweeperDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['lansweeper'] } }, default: {} },
];
