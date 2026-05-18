import * as message from './message';
import { INodeProperties } from 'n8n-workflow';

export { message };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['zoom'] } },
		options: [
			{ name: 'Message', value: 'message', action: 'Message Zoom' },
		],
		default: 'message',
	},
	...message.description,
];
