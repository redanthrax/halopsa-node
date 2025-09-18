import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const invoiceId = this.getNodeParameter('invoiceId', index) as number;
	const bypassAccountsSync = this.getNodeParameter('bypass_accounts_sync', index) as boolean;

	const qs = {} as IDataObject;
	
	if (bypassAccountsSync !== undefined) qs.bypass_accounts_sync = bypassAccountsSync;

	const requestMethod = 'DELETE';
	const endpoint = `/Invoice/${invoiceId}`;
	const body = {} as IDataObject;

	await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray([{ success: true, id: invoiceId }]);
}