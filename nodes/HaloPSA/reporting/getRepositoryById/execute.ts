import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const reportId = this.getNodeParameter('reportId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ReportRepository/${reportId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
