import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Stream One Ion Details ID', name: 'streamOneIonDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['streamOneIonDetails'], operation: ['delete'] } }, default: 0 },
];
