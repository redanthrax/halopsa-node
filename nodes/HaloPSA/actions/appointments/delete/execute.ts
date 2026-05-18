import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const appointmentId = this.getNodeParameter('appointmentId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Appointment/${appointmentId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: appointmentId },
		pairedItem: { item: index },
	}];
}
