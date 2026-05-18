import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'CRMNote ID', name: 'cRMNoteId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cRMNote'], operation: ['getById'] } }, default: 0 },
];
