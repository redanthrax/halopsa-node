import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Custom Button ID', name: 'customButtonId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customButton'], operation: ['getById'] } }, default: 0 },
];
