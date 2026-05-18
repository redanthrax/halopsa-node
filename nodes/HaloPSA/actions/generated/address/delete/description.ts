import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Address ID', name: 'addresId', type: 'number', required: true,
		displayOptions: { show: { resource: ['address'], operation: ['delete'] } }, default: 0 },
];
