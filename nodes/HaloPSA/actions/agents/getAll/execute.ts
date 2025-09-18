import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply filters - comprehensive mapping of all available filters
	if (filters.activeinactive) qs.activeinactive = filters.activeinactive;
	if (filters.appointmentscreen !== undefined) qs.appointmentscreen = filters.appointmentscreen;
	if (filters.basic_fields_only !== undefined) qs.basic_fields_only = filters.basic_fields_only;
	if (filters.can_edit_only !== undefined) qs.can_edit_only = filters.can_edit_only;
	if (filters.client_id) qs.client_id = filters.client_id;
	if (filters.clientidoverride) qs.clientidoverride = filters.clientidoverride;
	if (filters.department_id) qs.department_id = filters.department_id;
	if (filters.departments) qs.departments = filters.departments;
	if (filters.domain) qs.domain = filters.domain;
	if (filters.exchangecalendars !== undefined) qs.exchangecalendars = filters.exchangecalendars;
	if (filters.exclude_membership_info !== undefined) qs.exclude_membership_info = filters.exclude_membership_info;
	if (filters.excludeAgent) qs.excludeAgent = filters.excludeAgent;
	if (filters.forcequalmatch !== undefined) qs.forcequalmatch = filters.forcequalmatch;
	if (filters.include_membership_info !== undefined) qs.include_membership_info = filters.include_membership_info;
	if (filters.includeapiagents !== undefined) qs.includeapiagents = filters.includeapiagents;
	if (filters.includedisabled) qs.includedisabled = filters.includedisabled;
	if (filters.includeenabled) qs.includeenabled = filters.includeenabled;
	if (filters.includenamedcount !== undefined) qs.includenamedcount = filters.includenamedcount;
	if (filters.includeroles !== undefined) qs.includeroles = filters.includeroles;
	if (filters.includestatus !== undefined) qs.includestatus = filters.includestatus;
	if (filters.includeunassigned) qs.includeunassigned = filters.includeunassigned;
	if (filters.is_agent_cache !== undefined) qs.is_agent_cache = filters.is_agent_cache;
	if (filters.integration_type) qs.integration_type = filters.integration_type;
	if (filters.linemanagedonly !== undefined) qs.linemanagedonly = filters.linemanagedonly;
	if (filters.linkingagents !== undefined) qs.linkingagents = filters.linkingagents;
	if (filters.loadcache !== undefined) qs.loadcache = filters.loadcache;
	if (filters.onlinestatuses) qs.onlinestatuses = filters.onlinestatuses;
	if (filters.order) qs.order = filters.order;
	if (filters.order2) qs.order2 = filters.order2;
	if (filters.order3) qs.order3 = filters.order3;
	if (filters.order4) qs.order4 = filters.order4;
	if (filters.order5) qs.order5 = filters.order5;
	if (filters.orderdesc !== undefined) qs.orderdesc = filters.orderdesc;
	if (filters.orderdesc2 !== undefined) qs.orderdesc2 = filters.orderdesc2;
	if (filters.orderdesc3 !== undefined) qs.orderdesc3 = filters.orderdesc3;
	if (filters.orderdesc4 !== undefined) qs.orderdesc4 = filters.orderdesc4;
	if (filters.orderdesc5 !== undefined) qs.orderdesc5 = filters.orderdesc5;
	if (filters.page_no) qs.page_no = filters.page_no;
	if (filters.page_size) qs.page_size = filters.page_size;
	if (filters.pageinate !== undefined) qs.pageinate = filters.pageinate;
	if (filters.qualifications) qs.qualifications = filters.qualifications;
	if (filters.reassign !== undefined) qs.reassign = filters.reassign;
	if (filters.remoteagents !== undefined) qs.remoteagents = filters.remoteagents;
	if (filters.remoteagenttype) qs.remoteagenttype = filters.remoteagenttype;
	if (filters.role) qs.role = filters.role;
	if (filters.search) qs.search = filters.search;
	if (filters.shiftagentsonly !== undefined) qs.shiftagentsonly = filters.shiftagentsonly;
	if (filters.showall !== undefined) qs.showall = filters.showall;
	if (filters.showcounts !== undefined) qs.showcounts = filters.showcounts;
	if (filters.team) qs.team = filters.team;
	if (filters.team_id) qs.team_id = filters.team_id;
	if (filters.teams) qs.teams = filters.teams;
	if (filters.thisAgentOnly !== undefined) qs.thisAgentOnly = filters.thisAgentOnly;
	if (filters.ticketarea_id) qs.ticketarea_id = filters.ticketarea_id;
	if (filters.tickettype_id) qs.tickettype_id = filters.tickettype_id;
	if (filters.view_id) qs.view_id = filters.view_id;
	if (filters.withemail !== undefined) qs.withemail = filters.withemail;

	// Handle pagination
	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.page_size = limit;
	}

	try {
		const response = await apiRequest.call(this, 'GET', '/Agent', {}, qs);
		// Response is directly an array of agents
		const agents = Array.isArray(response) ? response : [];

		return agents.map((agent: any) => ({
			json: agent,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw error;
	}
}