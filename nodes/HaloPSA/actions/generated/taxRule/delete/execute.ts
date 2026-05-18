import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const taxRuleId = this.getNodeParameter('taxRuleId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TaxRule/${taxRuleId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: taxRuleId }, pairedItem: { item: index } }];
}
