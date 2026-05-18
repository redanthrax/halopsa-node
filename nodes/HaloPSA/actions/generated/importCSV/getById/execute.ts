import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const importCSVId = this.getNodeParameter('importCSVId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ImportCSV/${importCSVId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
