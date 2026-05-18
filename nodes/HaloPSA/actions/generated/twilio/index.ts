import * as callback from './callback';
import * as twiml from './twiml';
import { INodeProperties } from 'n8n-workflow';

export { callback, twiml };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['twilio'] } },
		options: [
			{ name: 'callback', value: 'callback', action: 'callback Twilio' },
			{ name: 'twiml', value: 'twiml', action: 'twiml Twilio' },
		],
		default: 'callback',
	},
	...callback.description,
	...twiml.description,
];
