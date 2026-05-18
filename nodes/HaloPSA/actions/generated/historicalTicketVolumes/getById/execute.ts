import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const historicalTicketVolumeId = this.getNodeParameter('historicalTicketVolumeId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/HistoricalTicketVolumes/${historicalTicketVolumeId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
