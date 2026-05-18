import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const dashboardLinksRepositoryId = this.getNodeParameter('dashboardLinksRepositoryId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/DashboardLinksRepository/${dashboardLinksRepositoryId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
