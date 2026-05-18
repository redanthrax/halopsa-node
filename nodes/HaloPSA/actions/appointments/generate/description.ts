import { INodeProperties } from 'n8n-workflow';

export const generateDescription: INodeProperties[] = [
	{ displayName: 'Appointment IDs', name: 'appointmentIds', type: 'json', required: true,
		displayOptions: { show: { resource: ['appointments'], operation: ['generate'] } },
		default: '[]', description: 'JSON array of appointment IDs (integers)' },
];
