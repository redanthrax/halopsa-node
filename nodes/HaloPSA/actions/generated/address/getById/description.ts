import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Address ID', name: 'addresId', type: 'number', required: true,
		displayOptions: { show: { resource: ['address'], operation: ['getById'] } }, default: 0 },
];
