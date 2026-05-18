import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'CSVTemplate ID', name: 'cSVTemplateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cSVTemplate'], operation: ['getById'] } }, default: 0 },
];
