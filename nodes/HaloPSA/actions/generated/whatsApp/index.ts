import * as data from './data';
import * as processedIds from './processedIds';
import { INodeProperties } from 'n8n-workflow';

export { data, processedIds };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['whatsApp'] } },
		options: [
			{ name: 'Data', value: 'data', action: 'Data Whats App' },
			{ name: 'ProcessedIds', value: 'processedIds', action: 'ProcessedIds Whats App' },
		],
		default: 'data',
	},
	...data.description,
	...processedIds.description,
];
