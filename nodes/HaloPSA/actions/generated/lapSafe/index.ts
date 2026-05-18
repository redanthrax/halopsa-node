import * as get from './get';
import * as cancel from './cancel';
import * as complete from './complete';
import { INodeProperties } from 'n8n-workflow';

export { get, cancel, complete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['lapSafe'] } },
		options: [
			{ name: 'Get', value: 'get', action: 'Get Lap Safe' },
			{ name: 'Cancel', value: 'cancel', action: 'Cancel Lap Safe' },
			{ name: 'Complete', value: 'complete', action: 'Complete Lap Safe' },
		],
		default: 'get',
	},
	...get.description,
	...cancel.description,
	...complete.description,
];
