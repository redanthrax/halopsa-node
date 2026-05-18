import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Adobe Acrobat Details ID', name: 'adobeAcrobatDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['adobeAcrobatDetails'], operation: ['delete'] } }, default: 0 },
];
