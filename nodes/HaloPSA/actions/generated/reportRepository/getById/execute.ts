import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const reportRepositoryId = this.getNodeParameter('reportRepositoryId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ReportRepository/${reportRepositoryId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
