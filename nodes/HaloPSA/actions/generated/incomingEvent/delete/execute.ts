import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const incomingEventId = this.getNodeParameter('incomingEventId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/IncomingEvent/${incomingEventId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: incomingEventId }, pairedItem: { item: index } }];
}
