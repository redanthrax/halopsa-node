import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const clientPrepayId = this.getNodeParameter('clientPrepayId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ClientPrepay/${clientPrepayId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
