import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const setupTabId = this.getNodeParameter('setupTabId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SetupTab/${setupTabId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
