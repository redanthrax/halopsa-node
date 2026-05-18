import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const planId = this.getNodeParameter('planId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ContractSchedulePlan/${planId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: planId }, pairedItem: { item: index } }];
}
