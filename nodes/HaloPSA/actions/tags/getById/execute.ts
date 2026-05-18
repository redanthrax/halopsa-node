import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const tagId = this.getNodeParameter('tagId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Tags/${tagId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
