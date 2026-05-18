import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Power Shell Script Criteria ID', name: 'powerShellScriptCriteriaId', type: 'number', required: true,
		displayOptions: { show: { resource: ['powerShellScriptCriteria'], operation: ['delete'] } }, default: 0 },
];
