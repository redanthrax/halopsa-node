import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Top Level ID', name: 'topLevelId', type: 'number', required: true,
		displayOptions: { show: { resource: ['topLevels'], operation: ['delete'] } }, default: 0 },
];
