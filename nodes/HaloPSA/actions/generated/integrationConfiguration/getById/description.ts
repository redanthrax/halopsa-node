import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Integration Configuration ID', name: 'integrationConfigurationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationConfiguration'], operation: ['getById'] } }, default: 0 },
];
