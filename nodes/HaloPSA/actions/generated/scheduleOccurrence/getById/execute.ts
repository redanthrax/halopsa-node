import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const scheduleOccurrenceId = this.getNodeParameter('scheduleOccurrenceId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ScheduleOccurrence/${scheduleOccurrenceId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
