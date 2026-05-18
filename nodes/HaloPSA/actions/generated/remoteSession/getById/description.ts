import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Remote Session ID', name: 'remoteSessionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['remoteSession'], operation: ['getById'] } }, default: 0 },
];
