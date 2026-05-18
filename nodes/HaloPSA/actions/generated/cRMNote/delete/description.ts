import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'CRMNote ID', name: 'cRMNoteId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cRMNote'], operation: ['delete'] } }, default: 0 },
];
