import { GenericValue, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const appointmentIds = this.getNodeParameter('appointmentIds', index) as string;
	let parsed: unknown;
	try {
		parsed = JSON.parse(appointmentIds);
	} catch {
		throw new Error('Invalid JSON format for appointment IDs');
	}
	const response = await apiRequest.call(this, 'POST', '/Appointment/Generate', parsed as GenericValue[], {});
	return this.helpers.returnJsonArray(response);
}
