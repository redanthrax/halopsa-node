import * as manifest from './manifest';
import * as command from './command';
import * as event from './event';
import * as interactivity from './interactivity';
import { INodeProperties } from 'n8n-workflow';

export { manifest, command, event, interactivity };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['slack'] } },
		options: [
			{ name: 'Manifest', value: 'manifest', action: 'Manifest Slack' },
			{ name: 'Command', value: 'command', action: 'Command Slack' },
			{ name: 'Event', value: 'event', action: 'Event Slack' },
			{ name: 'Interactivity', value: 'interactivity', action: 'Interactivity Slack' },
		],
		default: 'manifest',
	},
	...manifest.description,
	...command.description,
	...event.description,
	...interactivity.description,
];
