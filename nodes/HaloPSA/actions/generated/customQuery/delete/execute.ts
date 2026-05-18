import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customQueryId = this.getNodeParameter('customQueryId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/CustomQuery/${customQueryId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: customQueryId }, pairedItem: { item: index } }];
}
