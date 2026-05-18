import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'CSVTemplate ID', name: 'cSVTemplateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cSVTemplate'], operation: ['delete'] } }, default: 0 },
];
