import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Arrow Sphere Details ID', name: 'arrowSphereDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['arrowSphereDetails'], operation: ['getById'] } }, default: 0 },
];
