import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index, 0) as number;
	const mineOnly = this.getNodeParameter('mineOnly', index, false) as boolean;

	const qs: IDataObject = {};
	if (ticketId > 0) {
		qs.ticket_id = ticketId;
	}
	if (mineOnly) {
		qs.mine = true;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/TicketApproval',
		resourceKey: '',
		qs,
		maxLimit: 100,
		skipLimit: true,
	});
}
