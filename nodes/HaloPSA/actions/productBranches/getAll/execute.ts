import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const productId = this.getNodeParameter('productId', index, 0) as number;
	const qs: IDataObject = {};
	if (productId > 0) qs.product_id = productId;

	return runGetAllRequest.call(this, index, {
		endpoint: '/ProductBranch',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
