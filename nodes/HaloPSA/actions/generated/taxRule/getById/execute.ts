import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const taxRuleId = this.getNodeParameter('taxRuleId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/TaxRule/${taxRuleId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
