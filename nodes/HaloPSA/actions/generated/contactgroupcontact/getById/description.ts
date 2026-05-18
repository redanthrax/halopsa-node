import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Contactgroupcontact ID', name: 'contactgroupcontactId', type: 'number', required: true,
		displayOptions: { show: { resource: ['contactgroupcontact'], operation: ['getById'] } }, default: 0 },
];
