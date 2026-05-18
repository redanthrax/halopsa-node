import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Software Licence ID', name: 'softwareLicenceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['softwareLicence'], operation: ['delete'] } }, default: 0 },
];
