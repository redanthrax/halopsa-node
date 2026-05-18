import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const resourceTypeId = this.getNodeParameter('resourceTypeId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ResourceType/${resourceTypeId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
