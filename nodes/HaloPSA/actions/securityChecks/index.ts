import * as get from './get';
import * as getOldEncryption from './getOldEncryption';
import { INodeProperties } from 'n8n-workflow';

export { get, getOldEncryption };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['securityChecks'] } },
		options: [
			{ name: 'Get', value: 'get', action: 'Run security check' },
			{ name: 'Get Old Encryption', value: 'getOldEncryption', action: 'Check old encryption' },
		],
		default: 'get',
	},
	...get.description,
	...getOldEncryption.description,
];
