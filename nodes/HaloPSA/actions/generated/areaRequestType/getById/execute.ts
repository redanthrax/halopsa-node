import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const areaRequestTypeId = this.getNodeParameter('areaRequestTypeId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AreaRequestType/${areaRequestTypeId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
