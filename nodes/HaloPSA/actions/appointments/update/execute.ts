import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const appointmentId = this.getNodeParameter('appointmentId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	const body = [{ id: appointmentId, ...updateFields }];
	const response = await apiRequest.call(this, 'POST', '/Appointment', body, {});
	const record = Array.isArray(response) ? response[0] : response;

	return [{ json: record as IDataObject, pairedItem: { item: index } }];
}
