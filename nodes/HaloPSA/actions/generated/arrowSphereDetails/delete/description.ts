import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Arrow Sphere Details ID', name: 'arrowSphereDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['arrowSphereDetails'], operation: ['delete'] } }, default: 0 },
];
