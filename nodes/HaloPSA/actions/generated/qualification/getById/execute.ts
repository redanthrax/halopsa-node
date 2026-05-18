import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qualificationId = this.getNodeParameter('qualificationId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Qualification/${qualificationId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
