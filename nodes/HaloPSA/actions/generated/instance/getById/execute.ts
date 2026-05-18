import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const instanceId = this.getNodeParameter('instanceId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Instance/${instanceId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
