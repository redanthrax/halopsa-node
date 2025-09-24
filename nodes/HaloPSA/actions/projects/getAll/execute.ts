import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloProjectsListResponse } from '../../interfaces/projects';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	if (filters.advanced_search) qs.advanced_search = filters.advanced_search;
	if (filters.agent_id) qs.agent_id = filters.agent_id;
	if (filters.client_id) qs.client_id = filters.client_id;
	if (filters.site_id) qs.site_id = filters.site_id;
	if (filters.user_id) qs.user_id = filters.user_id;
	if (filters.team_id) qs.team_id = filters.team_id;
	if (filters.status_id) qs.status_id = filters.status_id;
	if (filters.tickettype_id) qs.tickettype_id = filters.tickettype_id;
	if (filters.priority_id) qs.priority_id = filters.priority_id;
	
	if (filters.startdate) qs.startdate = filters.startdate;
	if (filters.enddate) qs.enddate = filters.enddate;
	if (filters.datesearch) qs.datesearch = filters.datesearch;
	
	if (filters.includeprojects !== undefined) qs.includeprojects = filters.includeprojects;
	if (filters.projectinternaltask !== undefined) qs.projectinternaltask = filters.projectinternaltask;
	if (filters.showonroadmap !== undefined) qs.showonroadmap = filters.showonroadmap;
	if (filters.pipeline_stage_id) qs.pipeline_stage_id = filters.pipeline_stage_id;
	if (filters.workflow_id) qs.workflow_id = filters.workflow_id;
	
	if (filters.search) qs.search = filters.search;
	if (filters.search_summary) qs.search_summary = filters.search_summary;
	if (filters.search_details) qs.search_details = filters.search_details;
	
	if (filters.open_only !== undefined) qs.open_only = filters.open_only;
	if (filters.closed_only !== undefined) qs.closed_only = filters.closed_only;
	if (filters.flagged !== undefined) qs.flagged = filters.flagged;
	if (filters.onhold !== undefined) qs.onhold = filters.onhold;
	if (filters.mine !== undefined) qs.mine = filters.mine;
	
	if (filters.includedetails !== undefined) qs.includedetails = filters.includedetails;
	if (filters.includecustomfields !== undefined) qs.includecustomfields = filters.includecustomfields;
	if (filters.includeattachments !== undefined) qs.includeattachments = filters.includeattachments;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Projects';
	const body = {} as IDataObject;

	let responseData: HaloProjectsListResponse;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData.faults || []);
}