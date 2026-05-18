import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const importCSVId = this.getNodeParameter('importCSVId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ImportCSV/${importCSVId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: importCSVId }, pairedItem: { item: index } }];
}
