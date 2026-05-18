import { INodeProperties } from 'n8n-workflow';

export const createBookingDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json', required: true,
		displayOptions: { show: { resource: ['appointments'], operation: ['createBooking'] } }, default: {},
		description: 'Appointment object for POST /Appointment/Booking' },
];
