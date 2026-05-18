import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['transcriptionStore'], operation: ['create'] } }, default: {},
		description: 'TranscriptionStore object or array for POST /TranscriptionStore' },
];
