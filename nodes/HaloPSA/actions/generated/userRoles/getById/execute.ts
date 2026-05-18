import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const userRoleId = this.getNodeParameter('userRoleId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/UserRoles/${userRoleId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
