import { INodeProperties } from 'n8n-workflow';

export const languagePackTranslateDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['azureTranslate'], operation: ['languagePackTranslate'] } }, default: {} },
];
