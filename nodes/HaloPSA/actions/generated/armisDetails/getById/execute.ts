import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const armisDetailId = this.getNodeParameter('armisDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ArmisDetails/${armisDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
