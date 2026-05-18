import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Budget Type ID', name: 'budgetTypeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['budgetType'], operation: ['delete'] } }, default: 0 },
];
