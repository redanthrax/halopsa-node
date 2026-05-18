import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mailboxId = this.getNodeParameter('mailboxId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Mailbox/${mailboxId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
