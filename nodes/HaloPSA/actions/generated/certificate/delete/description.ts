import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Certificate ID', name: 'certificateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['certificate'], operation: ['delete'] } }, default: 0 },
];
