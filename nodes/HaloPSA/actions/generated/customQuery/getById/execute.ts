import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customQueryId = this.getNodeParameter('customQueryId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CustomQuery/${customQueryId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
