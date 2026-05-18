import { INodeProperties } from 'n8n-workflow';

export const approvalDescription: INodeProperties[] = [
	{ displayName: 'Approvals', name: 'approvals', type: 'json', required: true,
		displayOptions: { show: { resource: ['contracts'], operation: ['approval'] } },
		default: '[]', description: 'Array of ContractApproval objects' },
];
