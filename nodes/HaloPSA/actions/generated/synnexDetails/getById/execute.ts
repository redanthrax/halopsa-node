import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const synnexDetailId = this.getNodeParameter('synnexDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SynnexDetails/${synnexDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
