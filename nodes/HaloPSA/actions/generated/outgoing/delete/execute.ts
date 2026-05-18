import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const outgoingId = this.getNodeParameter('outgoingId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Outgoing/${outgoingId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: outgoingId }, pairedItem: { item: index } }];
}
