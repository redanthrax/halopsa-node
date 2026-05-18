import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mOId = this.getNodeParameter('mOId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/MO/${mOId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: mOId }, pairedItem: { item: index } }];
}
