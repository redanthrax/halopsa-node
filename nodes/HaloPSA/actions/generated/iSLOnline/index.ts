import * as get from './get';
import * as createLink from './createLink';
import { INodeProperties } from 'n8n-workflow';

export { get, createLink };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['iSLOnline'] } },
		options: [
			{ name: 'Get', value: 'get', action: 'Get ISLOnline' },
			{ name: 'CreateLink', value: 'createLink', action: 'CreateLink ISLOnline' },
		],
		default: 'get',
	},
	...get.description,
	...createLink.description,
];
