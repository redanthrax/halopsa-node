import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Stream One Ion Details ID', name: 'streamOneIonDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['streamOneIonDetails'], operation: ['getById'] } }, default: 0 },
];
