import { INodeProperties } from 'n8n-workflow';

export const updateEncDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['control'], operation: ['updateEnc'] } }, default: {} },
];
