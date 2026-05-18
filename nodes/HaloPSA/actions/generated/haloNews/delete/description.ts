import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Halo News ID', name: 'haloNewId', type: 'number', required: true,
		displayOptions: { show: { resource: ['haloNews'], operation: ['delete'] } }, default: 0 },
];
