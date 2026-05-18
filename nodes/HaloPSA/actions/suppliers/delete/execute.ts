import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const supplierId = this.getNodeParameter('supplierId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Supplier/${supplierId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: supplierId }, pairedItem: { item: index } }];
}
