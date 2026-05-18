import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const addresId = this.getNodeParameter('addresId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Address/${addresId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: addresId }, pairedItem: { item: index } }];
}
