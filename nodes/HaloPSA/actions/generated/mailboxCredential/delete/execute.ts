import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mailboxCredentialId = this.getNodeParameter('mailboxCredentialId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/MailboxCredential/${mailboxCredentialId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: mailboxCredentialId }, pairedItem: { item: index } }];
}
