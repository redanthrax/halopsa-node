import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Custom Button ID', name: 'customButtonId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customButton'], operation: ['delete'] } }, default: 0 },
];
