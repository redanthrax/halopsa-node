import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Style Profile ID', name: 'styleProfileId', type: 'number', required: true,
		displayOptions: { show: { resource: ['styleProfile'], operation: ['getById'] } }, default: 0 },
];
