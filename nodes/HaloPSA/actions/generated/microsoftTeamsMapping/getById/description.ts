import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Microsoft Teams Mapping ID', name: 'microsoftTeamsMappingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['microsoftTeamsMapping'], operation: ['getById'] } }, default: 0 },
];
