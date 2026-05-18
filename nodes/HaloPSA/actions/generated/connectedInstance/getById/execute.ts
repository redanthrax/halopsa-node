import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const connectedInstanceId = this.getNodeParameter('connectedInstanceId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ConnectedInstance/${connectedInstanceId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
