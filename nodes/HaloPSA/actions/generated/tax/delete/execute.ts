import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const taxId = this.getNodeParameter('taxId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Tax/${taxId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: taxId }, pairedItem: { item: index } }];
}
