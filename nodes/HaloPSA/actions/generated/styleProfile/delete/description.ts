import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Style Profile ID', name: 'styleProfileId', type: 'number', required: true,
		displayOptions: { show: { resource: ['styleProfile'], operation: ['delete'] } }, default: 0 },
];
