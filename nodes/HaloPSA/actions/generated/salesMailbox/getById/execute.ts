import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const salesMailboxId = this.getNodeParameter('salesMailboxId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SalesMailbox/${salesMailboxId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
