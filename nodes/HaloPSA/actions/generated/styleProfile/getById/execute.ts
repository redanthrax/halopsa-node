import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const styleProfileId = this.getNodeParameter('styleProfileId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/StyleProfile/${styleProfileId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
