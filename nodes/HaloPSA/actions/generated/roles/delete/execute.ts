import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const roleId = this.getNodeParameter('roleId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Roles/${roleId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: roleId }, pairedItem: { item: index } }];
}
