import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemGroupId = this.getNodeParameter('itemGroupId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ItemGroup/${itemGroupId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
