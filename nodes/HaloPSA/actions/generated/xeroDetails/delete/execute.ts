import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const xeroDetailId = this.getNodeParameter('xeroDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/XeroDetails/${xeroDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: xeroDetailId }, pairedItem: { item: index } }];
}
