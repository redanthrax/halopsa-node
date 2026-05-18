import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const addresId = this.getNodeParameter('addresId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Address/${addresId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
