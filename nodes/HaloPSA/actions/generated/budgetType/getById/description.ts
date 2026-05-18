import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Budget Type ID', name: 'budgetTypeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['budgetType'], operation: ['getById'] } }, default: 0 },
];
