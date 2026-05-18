import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const savedForecastId = this.getNodeParameter('savedForecastId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SavedForecast/${savedForecastId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
