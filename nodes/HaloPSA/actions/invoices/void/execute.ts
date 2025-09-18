import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const invoiceId = this.getNodeParameter('invoiceId', index) as number;

	const requestMethod = 'POST';
	const endpoint = `/Invoice/${invoiceId}/void`;
	const body = {} as IDataObject;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	return this.helpers.returnJsonArray([responseData]);
}