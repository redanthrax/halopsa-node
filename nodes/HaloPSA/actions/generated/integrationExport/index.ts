import * as getAll from './getAll';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['integrationExport'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Integration Export' },
			{ name: 'Create', value: 'create', action: 'Create Integration Export' },
			{ name: 'Delete', value: 'delete', action: 'Delete Integration Export' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...create.description,
	...deleteOp.description,
];
