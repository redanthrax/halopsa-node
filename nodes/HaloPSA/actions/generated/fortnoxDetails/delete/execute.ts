import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const fortnoxDetailId = this.getNodeParameter('fortnoxDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/FortnoxDetails/${fortnoxDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: fortnoxDetailId }, pairedItem: { item: index } }];
}
