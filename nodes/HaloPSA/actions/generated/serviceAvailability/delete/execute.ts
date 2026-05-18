import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const serviceAvailabilityId = this.getNodeParameter('serviceAvailabilityId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ServiceAvailability/${serviceAvailabilityId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: serviceAvailabilityId }, pairedItem: { item: index } }];
}
