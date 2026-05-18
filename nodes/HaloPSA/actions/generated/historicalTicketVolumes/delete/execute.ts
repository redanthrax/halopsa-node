import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const historicalTicketVolumeId = this.getNodeParameter('historicalTicketVolumeId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/HistoricalTicketVolumes/${historicalTicketVolumeId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: historicalTicketVolumeId }, pairedItem: { item: index } }];
}
