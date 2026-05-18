import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Adobe Acrobat Details ID', name: 'adobeAcrobatDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['adobeAcrobatDetails'], operation: ['getById'] } }, default: 0 },
];
