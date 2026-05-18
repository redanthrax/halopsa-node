import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const eventId = this.getNodeParameter('eventId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Event/${eventId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
