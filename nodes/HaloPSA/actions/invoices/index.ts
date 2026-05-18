import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteInvoice from './delete';
import * as updateLines from './updateLines';
import * as voidInvoice from './void';
import * as createPdf from './createPdf';
import * as getLines from './getLines';

import * as recordView from './recordView';
import { INodeProperties } from 'n8n-workflow';

export {
	recordView,
	getAll,
	getById,
	create,
	update,
	deleteInvoice as delete,
	updateLines,
	voidInvoice as void,
	createPdf,
	getLines,
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['invoices'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new invoice',
				action: 'Create an invoice',
			},
			{
				name: 'Create PDF',
				value: 'createPdf',
				description: 'Generate a PDF for an invoice',
				action: 'Create invoice PDF',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an invoice',
				action: 'Delete an invoice',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get an invoice by ID',
				action: 'Get an invoice by ID',
			},
			{
				name: 'Get Lines',
				value: 'getLines',
				description: 'Get invoice line data',
				action: 'Get invoice lines',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many invoices',
				action: 'Get many invoices',
			},
			{
				name: 'Record View',
				value: 'recordView',
				description: 'Record that an invoice was viewed',
				action: 'Record an invoice view',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an invoice',
				action: 'Update an invoice',
			},
			{
				name: 'Update Lines',
				value: 'updateLines',
				description: 'Update invoice lines',
				action: 'Update invoice lines',
			},
			{
				name: 'Void',
				value: 'void',
				description: 'Void an invoice',
				action: 'Void an invoice',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...recordView.description,
	...deleteInvoice.description,
	...updateLines.description,
	...voidInvoice.description,
	...createPdf.description,
	...getLines.description,
];