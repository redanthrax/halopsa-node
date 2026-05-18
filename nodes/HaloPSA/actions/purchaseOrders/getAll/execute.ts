import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const clientId = this.getNodeParameter('clientId', index, 0) as number;
	const search = this.getNodeParameter('search', index, '') as string;
	const openOnly = this.getNodeParameter('openOnly', index, false) as boolean;

	const qs: IDataObject = {};
	if (clientId > 0) {
		qs.client_id = clientId;
	}
	if (search) {
		qs.search = search;
	}
	if (openOnly) {
		qs.closed = false;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/PurchaseOrder',
		resourceKey: 'purchaseorders',
		qs,
		maxLimit: 100,
	});
}
