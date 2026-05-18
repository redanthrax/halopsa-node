import { INodeProperties } from 'n8n-workflow';

export const getBookingDescription: INodeProperties[] = [
	{ displayName: 'No Parameters', name: 'notice', type: 'notice',
		displayOptions: { show: { resource: ['appointments'], operation: ['getBooking'] } },
		default: '', description: 'Returns appointment booking data from GET /Appointment/Booking' },
];
