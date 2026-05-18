import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index, 0) as number;
	const actionId = this.getNodeParameter('actionId', index, 0) as number;
	const fileType = this.getNodeParameter('fileType', index, '') as string;

	const qs: IDataObject = {};
	if (ticketId > 0) {
		qs.ticket_id = ticketId;
	}
	if (actionId > 0) {
		qs.action_id = actionId;
	}
	if (fileType) {
		qs.filetype = fileType;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/Attachment',
		resourceKey: 'attachments',
		qs,
		maxLimit: 100,
	});
}
