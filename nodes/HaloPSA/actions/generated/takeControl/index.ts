import * as getUrl from './getUrl';
import { INodeProperties } from 'n8n-workflow';

export { getUrl };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['takeControl'] } },
		options: [
			{ name: 'GetUrl', value: 'getUrl', action: 'GetUrl Take Control' },
		],
		default: 'getUrl',
	},
	...getUrl.description,
];
