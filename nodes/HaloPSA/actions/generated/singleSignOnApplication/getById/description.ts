import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Single Sign On Application ID', name: 'singleSignOnApplicationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['singleSignOnApplication'], operation: ['getById'] } }, default: 0 },
];
