import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Pdf Template Repository ID', name: 'pdfTemplateRepositoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['pdfTemplateRepository'], operation: ['getById'] } }, default: 0 },
];
