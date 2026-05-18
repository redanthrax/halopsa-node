import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Transcription ID', name: 'transcriptionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['transcriptionStore'], operation: ['getById'] } }, default: 0 },
];
