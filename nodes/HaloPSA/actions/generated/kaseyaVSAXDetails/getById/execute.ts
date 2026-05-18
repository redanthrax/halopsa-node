import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const kaseyaVSAXDetailId = this.getNodeParameter('kaseyaVSAXDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/KaseyaVSAXDetails/${kaseyaVSAXDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
