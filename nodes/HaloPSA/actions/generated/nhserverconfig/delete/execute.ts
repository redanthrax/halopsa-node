import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const nhserverconfigId = this.getNodeParameter('nhserverconfigId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Nhserverconfig/${nhserverconfigId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: nhserverconfigId }, pairedItem: { item: index } }];
}
