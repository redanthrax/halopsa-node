import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const lookupId = this.getNodeParameter('lookupId', index, 0) as number;
	const clientId = this.getNodeParameter('clientId', index, 0) as number;

	const qs: IDataObject = {};
	if (lookupId > 0) {
		qs.lookupid = lookupId;
	}
	if (clientId > 0) {
		qs.client_id = clientId;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/Lookup',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
