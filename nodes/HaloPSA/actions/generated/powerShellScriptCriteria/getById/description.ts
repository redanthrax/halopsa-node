import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Power Shell Script Criteria ID', name: 'powerShellScriptCriteriaId', type: 'number', required: true,
		displayOptions: { show: { resource: ['powerShellScriptCriteria'], operation: ['getById'] } }, default: 0 },
];
