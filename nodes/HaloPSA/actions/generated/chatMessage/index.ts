import * as isTyping from './isTyping';
import * as getAll from './getAll';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { isTyping, getAll, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['chatMessage'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Chat Message' },
			{ name: 'Create', value: 'create', action: 'Create Chat Message' },
			{ name: 'IsTyping', value: 'isTyping', action: 'IsTyping Chat Message' },
		],
		default: 'getAll',
	},
	...isTyping.description,
	...getAll.description,
	...create.description,
];
