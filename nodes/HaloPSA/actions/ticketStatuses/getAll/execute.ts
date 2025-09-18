import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketStatusesListResponse } from '../../Interfaces';

export async function getAll(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply filters
	if (filters.domain) qs.domain = filters.domain;
	if (filters.excludeclosed !== undefined) qs.excludeclosed = filters.excludeclosed;
	if (filters.excludepending !== undefined) qs.excludepending = filters.excludepending;
	if (filters.outcome_id) qs.outcome_id = filters.outcome_id;
	if (filters.showall !== undefined) qs.showall = filters.showall;
	if (filters.showcounts !== undefined) qs.showcounts = filters.showcounts;
	if (filters.showquickchangeoptions !== undefined) qs.showquickchangeoptions = filters.showquickchangeoptions;
	if (filters.split_closed !== undefined) qs.split_closed = filters.split_closed;
	if (filters.ticket_id) qs.ticket_id = filters.ticket_id;
	if (filters.ticket_id_firstchild) qs.ticket_id_firstchild = filters.ticket_id_firstchild;
	if (filters.ticketarea_id) qs.ticketarea_id = filters.ticketarea_id;
	if (filters.tickettype_group_id) qs.tickettype_group_id = filters.tickettype_group_id;
	if (filters.tickettype_id) qs.tickettype_id = filters.tickettype_id;
	if (filters.tickettype_ids) qs.tickettype_ids = filters.tickettype_ids;
	if (filters.type) qs.type = filters.type;
	if (filters.view_id) qs.view_id = filters.view_id;

	const requestMethod = 'GET';
	const endpoint = '/Status';
	const body = {} as IDataObject;

	const responseData: HaloTicketStatusesListResponse = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	// Return the array directly as the API returns an array
	return this.helpers.returnJsonArray(responseData || []);
}
