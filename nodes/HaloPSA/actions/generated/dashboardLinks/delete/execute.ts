import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const dashboardLinkId = this.getNodeParameter('dashboardLinkId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/DashboardLinks/${dashboardLinkId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: dashboardLinkId }, pairedItem: { item: index } }];
}
