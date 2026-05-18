import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const nhserverconfigId = this.getNodeParameter('nhserverconfigId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Nhserverconfig/${nhserverconfigId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
