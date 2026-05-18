import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ruleId = this.getNodeParameter('ruleId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ContractRule/${ruleId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
