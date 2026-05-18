import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Security Question ID', name: 'securityQuestionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['securityQuestion'], operation: ['delete'] } }, default: 0 },
];
