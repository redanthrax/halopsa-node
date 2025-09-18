import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketDetailed } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index) as number;
	const options = this.getNodeParameter('options', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply options
	if (options.includedetails !== undefined) qs.includedetails = options.includedetails;
	if (options.includelastaction) qs.includelastaction = options.includelastaction;
	if (options.includeattachments) qs.includeattachments = options.includeattachments;
	if (options.includeagent) qs.includeagent = options.includeagent;
	if (options.includelinkedobjects) qs.includelinkedobjects = options.includelinkedobjects;
	if (options.include_auditing) qs.include_auditing = options.include_auditing;

	const requestMethod = 'GET';
	const endpoint = `/Tickets/${ticketId}`;
	const body = {} as IDataObject;

	let responseData: HaloTicketDetailed;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray([responseData]);
}