import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Pdf Template ID', name: 'pdfTemplateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['pdfTemplate'], operation: ['getById'] } }, default: 0 },
];
