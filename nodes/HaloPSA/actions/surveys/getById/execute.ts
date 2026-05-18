import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const feedbackId = this.getNodeParameter('feedbackId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Feedback/${feedbackId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
