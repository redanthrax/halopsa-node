import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const faultsForecastingId = this.getNodeParameter('faultsForecastingId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/FaultsForecasting/${faultsForecastingId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
