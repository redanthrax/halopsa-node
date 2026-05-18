import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Halo Device Info ID', name: 'haloDeviceInfoId', type: 'number', required: true,
		displayOptions: { show: { resource: ['haloDeviceInfo'], operation: ['delete'] } }, default: 0 },
];
