import * as complete from './complete';
import * as download from './download';
import { INodeProperties } from 'n8n-workflow';

export { complete, download };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['goToResolve'] } },
		options: [
			{ name: 'Complete', value: 'complete', action: 'Complete Go To Resolve' },
			{ name: 'Download', value: 'download', action: 'Download Go To Resolve' },
		],
		default: 'complete',
	},
	...complete.description,
	...download.description,
];
