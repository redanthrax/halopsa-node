import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const lDAPConnectionId = this.getNodeParameter('lDAPConnectionId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/LDAPConnection/${lDAPConnectionId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
