import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const salesOrderId = this.getNodeParameter('salesOrderId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SalesOrder/${salesOrderId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: salesOrderId },
		pairedItem: { item: index },
	}];
}
