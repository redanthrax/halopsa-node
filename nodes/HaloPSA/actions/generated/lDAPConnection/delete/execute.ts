import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const lDAPConnectionId = this.getNodeParameter('lDAPConnectionId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/LDAPConnection/${lDAPConnectionId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: lDAPConnectionId }, pairedItem: { item: index } }];
}
