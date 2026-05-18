import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const singleSignOnApplicationId = this.getNodeParameter('singleSignOnApplicationId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SingleSignOnApplication/${singleSignOnApplicationId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: singleSignOnApplicationId }, pairedItem: { item: index } }];
}
