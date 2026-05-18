import { INodeProperties } from 'n8n-workflow';

export const clearCacheDescription: INodeProperties[] = [
	{
		displayName: 'Notice',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: { resource: ['lookups'], operation: ['clearCache'] } },
		default: '',
		description: 'Clears the HaloPSA lookup cache (`POST /Lookup/ClearCache`). No parameters required.',
	},
];
