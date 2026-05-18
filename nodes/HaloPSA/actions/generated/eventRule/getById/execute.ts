import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const eventRuleId = this.getNodeParameter('eventRuleId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/EventRule/${eventRuleId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
