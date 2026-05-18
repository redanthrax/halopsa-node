import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {

	const qs: IDataObject = {};

	return runGetAllRequest.call(this, index, {
		endpoint: '/Tags',
		resourceKey: 'tags',
		qs,
		maxLimit: 100,
	});
}
