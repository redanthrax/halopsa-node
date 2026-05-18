import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Single Sign On Application ID', name: 'singleSignOnApplicationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['singleSignOnApplication'], operation: ['delete'] } }, default: 0 },
];
