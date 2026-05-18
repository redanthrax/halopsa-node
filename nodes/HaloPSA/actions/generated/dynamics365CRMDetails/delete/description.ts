import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Dynamics365CRMDetails ID', name: 'dynamics365CRMDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dynamics365CRMDetails'], operation: ['delete'] } }, default: 0 },
];
