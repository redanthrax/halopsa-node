import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const search = this.getNodeParameter('search', index, '') as string;
	const productId = this.getNodeParameter('productId', index, 0) as number;
	const includeDetails = this.getNodeParameter('includeDetails', index, false) as boolean;

	const qs: IDataObject = {};
	if (search) qs.search = search;
	if (productId > 0) qs.product_id = productId;
	if (includeDetails) qs.includedetails = includeDetails;

	return runGetAllRequest.call(this, index, {
		endpoint: '/Release',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
