import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Remote Session ID', name: 'remoteSessionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['remoteSession'], operation: ['delete'] } }, default: 0 },
];
