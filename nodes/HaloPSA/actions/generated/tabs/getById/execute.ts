import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const tabId = this.getNodeParameter('tabId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Tabs/${tabId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
