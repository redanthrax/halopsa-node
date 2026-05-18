import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const contactgroupId = this.getNodeParameter('contactgroupId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Contactgroup/${contactgroupId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
