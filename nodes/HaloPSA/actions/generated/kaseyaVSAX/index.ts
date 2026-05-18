import * as get from './get';
import * as createWebhook from './createWebhook';
import * as deleteDeleteWebhook from './deleteDeleteWebhook';
import { INodeProperties } from 'n8n-workflow';

export { get, createWebhook, deleteDeleteWebhook };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['kaseyaVSAX'] } },
		options: [
			{ name: 'Get', value: 'get', action: 'Get Kaseya VSAX' },
			{ name: 'createWebhook', value: 'createWebhook', action: 'createWebhook Kaseya VSAX' },
			{ name: 'deleteDeleteWebhook', value: 'deleteDeleteWebhook', action: 'deleteDeleteWebhook Kaseya VSAX' },
		],
		default: 'get',
	},
	...get.description,
	...createWebhook.description,
	...deleteDeleteWebhook.description,
];
