import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const forecastDetailId = this.getNodeParameter('forecastDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ForecastDetails/${forecastDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
