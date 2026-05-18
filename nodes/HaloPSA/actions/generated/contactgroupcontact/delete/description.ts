import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Contactgroupcontact ID', name: 'contactgroupcontactId', type: 'number', required: true,
		displayOptions: { show: { resource: ['contactgroupcontact'], operation: ['delete'] } }, default: 0 },
];
