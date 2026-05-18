import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Business Central Details ID', name: 'businessCentralDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['businessCentralDetails'], operation: ['delete'] } }, default: 0 },
];
