import * as get from './get';
import * as opExport from './opExport';
import * as status from './status';
import * as cancel from './cancel';
import { INodeProperties } from 'n8n-workflow';

export { get, opExport, status, cancel };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['tenable'] } },
		options: [
			{ name: 'Get', value: 'get', action: 'Get Tenable' },
			{ name: 'Export', value: 'opExport', action: 'Export Tenable' },
			{ name: 'Status', value: 'status', action: 'Status Tenable' },
			{ name: 'Cancel', value: 'cancel', action: 'Cancel Tenable' },
		],
		default: 'get',
	},
	...get.description,
	...opExport.description,
	...status.description,
	...cancel.description,
];
