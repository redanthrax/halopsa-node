import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemAccountsLinkId = this.getNodeParameter('itemAccountsLinkId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ItemAccountsLink/${itemAccountsLinkId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: itemAccountsLinkId }, pairedItem: { item: index } }];
}
