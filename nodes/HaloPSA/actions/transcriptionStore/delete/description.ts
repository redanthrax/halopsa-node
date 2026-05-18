import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Transcription ID', name: 'transcriptionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['transcriptionStore'], operation: ['delete'] } }, default: 0 },
];
