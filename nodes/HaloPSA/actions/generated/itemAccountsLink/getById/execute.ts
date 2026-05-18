import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemAccountsLinkId = this.getNodeParameter('itemAccountsLinkId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ItemAccountsLink/${itemAccountsLinkId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
