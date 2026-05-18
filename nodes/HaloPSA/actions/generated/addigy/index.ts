import * as get from './get';
import * as post from './post';
import { INodeProperties } from 'n8n-workflow';

export { get, post };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['addigy'] } },
		options: [
			{ name: 'Get', value: 'get', action: 'Get Addigy' },
			{ name: 'Post', value: 'post', action: 'Post Addigy' },
		],
		default: 'get',
	},
	...get.description,
	...post.description,
];
