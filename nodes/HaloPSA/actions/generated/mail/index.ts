import * as azure from './azure';
import * as azure2 from './azure2';
import * as google from './google';
import * as pop3 from './pop3';
import * as iMAP from './iMAP';
import * as processMail from './processMail';
import { INodeProperties } from 'n8n-workflow';

export { azure, azure2, google, pop3, iMAP, processMail };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['mail'] } },
		options: [
			{ name: 'Azure', value: 'azure', action: 'Azure Mail' },
			{ name: 'Azure', value: 'azure2', action: 'Azure Mail' },
			{ name: 'Google', value: 'google', action: 'Google Mail' },
			{ name: 'Pop3', value: 'pop3', action: 'Pop3 Mail' },
			{ name: 'IMAP', value: 'iMAP', action: 'IMAP Mail' },
			{ name: 'ProcessMail', value: 'processMail', action: 'ProcessMail Mail' },
		],
		default: 'azure',
	},
	...azure.description,
	...azure2.description,
	...google.description,
	...pop3.description,
	...iMAP.description,
	...processMail.description,
];
