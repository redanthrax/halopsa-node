import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mailboxId = this.getNodeParameter('mailboxId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Mailbox/${mailboxId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: mailboxId }, pairedItem: { item: index } }];
}
