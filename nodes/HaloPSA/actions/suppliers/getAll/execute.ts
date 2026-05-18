import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const search = this.getNodeParameter('search', index, '') as string;
	const includeActive = this.getNodeParameter('includeActive', index, true) as boolean;
	const includeInactive = this.getNodeParameter('includeInactive', index, false) as boolean;

	const qs: IDataObject = {};
	if (search) qs.search = search;
	if (includeActive) qs.includeactive = includeActive;
	if (includeInactive) qs.includeinactive = includeInactive;

	return runGetAllRequest.call(this, index, {
		endpoint: '/Supplier',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
