import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const dynamics365CRMDetailId = this.getNodeParameter('dynamics365CRMDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Dynamics365CRMDetails/${dynamics365CRMDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: dynamics365CRMDetailId }, pairedItem: { item: index } }];
}
