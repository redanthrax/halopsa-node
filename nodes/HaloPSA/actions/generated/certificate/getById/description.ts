import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Certificate ID', name: 'certificateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['certificate'], operation: ['getById'] } }, default: 0 },
];
