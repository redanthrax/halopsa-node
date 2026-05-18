import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const applicationId = this.getNodeParameter('applicationId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Application/${applicationId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
