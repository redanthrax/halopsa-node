import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const viewListGroupId = this.getNodeParameter('viewListGroupId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ViewListGroup/${viewListGroupId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
