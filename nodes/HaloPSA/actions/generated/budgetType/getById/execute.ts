import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const budgetTypeId = this.getNodeParameter('budgetTypeId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/BudgetType/${budgetTypeId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
