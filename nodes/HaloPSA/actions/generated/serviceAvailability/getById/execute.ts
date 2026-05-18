import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const serviceAvailabilityId = this.getNodeParameter('serviceAvailabilityId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ServiceAvailability/${serviceAvailabilityId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
