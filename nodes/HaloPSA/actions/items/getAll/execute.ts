import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const search = this.getNodeParameter('search', index, '') as string;
	const qs: IDataObject = {};
	if (search) {
		qs.search = search;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/Item',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
