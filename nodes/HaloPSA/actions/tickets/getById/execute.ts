import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveOptions } from '../../../filterParameters';
import { apiRequest } from '../../../transport';
import { HaloTicketDetailed } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index) as number;
	const qs = resolveOptions.call(this, index) as IDataObject;

	const responseData: HaloTicketDetailed = await apiRequest.call(
		this,
		'GET',
		`/Tickets/${ticketId}`,
		{},
		qs,
	);

	return this.helpers.returnJsonArray([responseData]);
}
