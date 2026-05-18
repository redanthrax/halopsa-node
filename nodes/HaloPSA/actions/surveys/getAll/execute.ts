import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index, 0) as number;
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;

	const items = await runGetAllRequest.call(this, index, {
		endpoint: '/Feedback',
		resourceKey: '',
		qs: {},
		maxLimit: 100,
		skipLimit: ticketId > 0,
	});

	let filtered = items;
	if (ticketId > 0) {
		filtered = items.filter((item) => {
			const row = item.json as IDataObject;
			return row.ticket_id === ticketId || row.feedback_faultid === ticketId;
		});
	}

	if (!returnAll && ticketId > 0) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		return filtered.slice(0, limit);
	}

	return filtered;
}
