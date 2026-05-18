import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const dattoRmmDetailId = this.getNodeParameter('dattoRmmDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/DattoRmmDetails/${dattoRmmDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
