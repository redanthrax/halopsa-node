import * as manage from './manage';
import { INodeProperties } from 'n8n-workflow';

export { manage };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['cSPSubscriptionPricing'] } },
		options: [
			{ name: 'manage', value: 'manage', action: 'manage CSPSubscription Pricing' },
		],
		default: 'manage',
	},
	...manage.description,
];
