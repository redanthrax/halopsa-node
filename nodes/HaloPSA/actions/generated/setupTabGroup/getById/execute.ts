import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const setupTabGroupId = this.getNodeParameter('setupTabGroupId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SetupTabGroup/${setupTabGroupId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
