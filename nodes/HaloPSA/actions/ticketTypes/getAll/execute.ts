import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketTypeListResponse } from '../../Interfaces';

export async function getAll(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply filters - comprehensive mapping of all available filters
	if (filters.access_control_level) qs.access_control_level = filters.access_control_level;
	if (filters.anonanduser !== undefined) qs.anonanduser = filters.anonanduser;
	if (filters.can_create_only !== undefined) qs.can_create_only = filters.can_create_only;
	if (filters.can_edit_only !== undefined) qs.can_edit_only = filters.can_edit_only;
	if (filters.canagentsselect !== undefined) qs.canagentsselect = filters.canagentsselect;
	if (filters.canusercreate !== undefined) qs.canusercreate = filters.canusercreate;
	if (filters.client_id) qs.client_id = filters.client_id;
	if (filters.domain) qs.domain = filters.domain;
	if (filters.group_id) qs.group_id = filters.group_id;
	if (filters.include_current) qs.include_current = filters.include_current;
	if (filters.include_mandatory_field_check !== undefined) qs.include_mandatory_field_check = filters.include_mandatory_field_check;
	if (filters.isquicktimedropdown !== undefined) qs.isquicktimedropdown = filters.isquicktimedropdown;
	if (filters.itil_type) qs.itil_type = filters.itil_type;
	if (filters.outcome_id) qs.outcome_id = filters.outcome_id;
	if (filters.searchtickets) qs.searchtickets = filters.searchtickets;
	if (filters.showall !== undefined) qs.showall = filters.showall;
	if (filters.showcounts !== undefined) qs.showcounts = filters.showcounts;
	if (filters.showinactive !== undefined) qs.showinactive = filters.showinactive;
	if (filters.sprints_only !== undefined) qs.sprints_only = filters.sprints_only;
	if (filters.ticketarea_id) qs.ticketarea_id = filters.ticketarea_id;
	if (filters.user_only !== undefined) qs.user_only = filters.user_only;
	if (filters.view_id) qs.view_id = filters.view_id;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/TicketType';
	const body = {} as IDataObject;

	const responseData: HaloTicketTypeListResponse = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	// Return the array directly as the API returns an array, not a wrapped object
	return this.helpers.returnJsonArray(responseData || []);
}