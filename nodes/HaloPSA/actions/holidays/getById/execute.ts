import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const holidayId = this.getNodeParameter('holidayId', index) as string;
	const response = await apiRequest.call(this, 'GET', `/Holiday/${holidayId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
