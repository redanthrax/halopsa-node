import * as priceAndAvailability from './priceAndAvailability';
import { INodeProperties } from 'n8n-workflow';

export { priceAndAvailability };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['aTT'] } },
		options: [
			{ name: 'PriceAndAvailability', value: 'priceAndAvailability', action: 'PriceAndAvailability ATT' },
		],
		default: 'priceAndAvailability',
	},
	...priceAndAvailability.description,
];
