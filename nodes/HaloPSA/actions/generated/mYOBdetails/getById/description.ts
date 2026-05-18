import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'MYOBdetails ID', name: 'mYOBdetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mYOBdetails'], operation: ['getById'] } }, default: 0 },
];
