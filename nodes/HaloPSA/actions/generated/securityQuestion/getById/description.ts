import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Security Question ID', name: 'securityQuestionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['securityQuestion'], operation: ['getById'] } }, default: 0 },
];
