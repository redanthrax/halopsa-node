import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const invoiceId = this.getNodeParameter('invoiceId', index) as number;
	const includedetails = this.getNodeParameter('includedetails', index) as boolean;

	const qs = {} as IDataObject;
	
	if (includedetails !== undefined) qs.includedetails = includedetails;

	const requestMethod = 'GET';
	const endpoint = `/Invoice/${invoiceId}`;
	const body = {} as IDataObject;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray([responseData]);
}