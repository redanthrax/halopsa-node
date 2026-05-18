import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Area Request Type ID', name: 'areaRequestTypeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['areaRequestType'], operation: ['getById'] } }, default: 0 },
];
