import * as customTranslate from './customTranslate';
import * as languagePackTranslate from './languagePackTranslate';
import { INodeProperties } from 'n8n-workflow';

export { customTranslate, languagePackTranslate };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['azureTranslate'] } },
		options: [
			{ name: 'CustomTranslate', value: 'customTranslate', action: 'CustomTranslate Azure Translate' },
			{ name: 'LanguagePackTranslate', value: 'languagePackTranslate', action: 'LanguagePackTranslate Azure Translate' },
		],
		default: 'customTranslate',
	},
	...customTranslate.description,
	...languagePackTranslate.description,
];
