import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Top Level ID', name: 'topLevelId', type: 'number', required: true,
		displayOptions: { show: { resource: ['topLevels'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getById'] } }, default: false },
	{ displayName: 'Include Agents', name: 'includeAgents', type: 'boolean',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getById'] } }, default: false },
	{ displayName: 'Include Teams', name: 'includeTeams', type: 'boolean',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getById'] } }, default: false },
];
