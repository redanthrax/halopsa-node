import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const templateId = this.getNodeParameter('templateId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Template/${templateId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
