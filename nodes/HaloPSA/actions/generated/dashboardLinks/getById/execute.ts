import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const dashboardLinkId = this.getNodeParameter('dashboardLinkId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/DashboardLinks/${dashboardLinkId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
