import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const clientPrepayId = this.getNodeParameter('clientPrepayId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ClientPrepay/${clientPrepayId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: clientPrepayId }, pairedItem: { item: index } }];
}
