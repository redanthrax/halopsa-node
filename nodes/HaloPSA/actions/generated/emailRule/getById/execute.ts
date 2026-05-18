import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const emailRuleId = this.getNodeParameter('emailRuleId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/EmailRule/${emailRuleId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
