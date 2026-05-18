import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const scheduleId = this.getNodeParameter('scheduleId', index) as number;
	const includeDetails = this.getNodeParameter('includeDetails', index, false) as boolean;
	const qs: Record<string, boolean> = {};
	if (includeDetails) qs.includedetails = true;
	const response = await apiRequest.call(this, 'GET', `/ContractSchedule/${scheduleId}`, {}, qs);
	return [{ json: response, pairedItem: { item: index } }];
}
