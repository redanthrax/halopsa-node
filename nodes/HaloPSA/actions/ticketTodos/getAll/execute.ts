import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index, 0) as number;

	const qs: IDataObject = {};
	if (ticketId > 0) {
		qs.ticket_id = ticketId;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/ToDo',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
