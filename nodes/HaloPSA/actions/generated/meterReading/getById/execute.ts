import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const meterReadingId = this.getNodeParameter('meterReadingId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/MeterReading/${meterReadingId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
