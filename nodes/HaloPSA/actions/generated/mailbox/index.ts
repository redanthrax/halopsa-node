import * as outlookContacts from './outlookContacts';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { outlookContacts, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['mailbox'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Mailbox' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Mailbox' },
			{ name: 'Create', value: 'create', action: 'Create Mailbox' },
			{ name: 'Delete', value: 'delete', action: 'Delete Mailbox' },
			{ name: 'OutlookContacts', value: 'outlookContacts', action: 'OutlookContacts Mailbox' },
		],
		default: 'getAll',
	},
	...outlookContacts.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
