import * as get from './get';
import * as getQuote from './getQuote';
import { INodeProperties } from 'n8n-workflow';

export { get, getQuote };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['ingramMicroReseller'] } },
		options: [
			{ name: 'Get', value: 'get', action: 'Get Ingram Micro Reseller' },
			{ name: 'GetQuote', value: 'getQuote', action: 'GetQuote Ingram Micro Reseller' },
		],
		default: 'get',
	},
	...get.description,
	...getQuote.description,
];
