import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const appointmentId = this.getNodeParameter('appointmentId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Appointment/${appointmentId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
