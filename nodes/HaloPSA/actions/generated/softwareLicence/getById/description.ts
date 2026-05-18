import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Software Licence ID', name: 'softwareLicenceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['softwareLicence'], operation: ['getById'] } }, default: 0 },
];
