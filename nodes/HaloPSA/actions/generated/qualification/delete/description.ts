import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Qualification ID', name: 'qualificationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['qualification'], operation: ['delete'] } }, default: 0 },
];
