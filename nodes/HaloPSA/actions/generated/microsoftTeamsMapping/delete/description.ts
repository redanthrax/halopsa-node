import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Microsoft Teams Mapping ID', name: 'microsoftTeamsMappingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['microsoftTeamsMapping'], operation: ['delete'] } }, default: 0 },
];
