import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const chatProfileId = this.getNodeParameter('chatProfileId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ChatProfile/${chatProfileId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
