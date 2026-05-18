import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Supplier Contract ID', name: 'supplierContractId', type: 'number', required: true,
		displayOptions: { show: { resource: ['supplierContract'], operation: ['getById'] } }, default: 0 },
];
