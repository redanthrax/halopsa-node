import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'MYOBdetails ID', name: 'mYOBdetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mYOBdetails'], operation: ['delete'] } }, default: 0 },
];
