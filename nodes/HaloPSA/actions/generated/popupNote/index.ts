import * as read from './read';
import * as getAll from './getAll';
import { INodeProperties } from 'n8n-workflow';

export { read, getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['popupNote'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Popup Note' },
			{ name: 'read', value: 'read', action: 'read Popup Note' },
		],
		default: 'getAll',
	},
	...read.description,
	...getAll.description,
];
