import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketsListResponse } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply filters - comprehensive mapping of all available filters
	// Basic filters
	if (filters.advanced_search) qs.advanced_search = filters.advanced_search;
	if (filters.agent) qs.agent = filters.agent;
	if (filters.agent_id) qs.agent_id = filters.agent_id;
	if (filters.alerttype) qs.alerttype = filters.alerttype;
	if (filters.asset_id) qs.asset_id = filters.asset_id;
	if (filters.awaitinginput) qs.awaitinginput = filters.awaitinginput;
	if (filters.billableonly !== undefined) qs.billableonly = filters.billableonly;
	if (filters.billing_date) qs.billing_date = filters.billing_date;
	if (filters.billing_type) qs.billing_type = filters.billing_type;
	if (filters.billingcontractid) qs.billingcontractid = filters.billingcontractid;
	
	// Date filters
	if (filters.calendar_enddate) qs.calendar_enddate = filters.calendar_enddate;
	if (filters.calendar_startdate) qs.calendar_startdate = filters.calendar_startdate;
	if (filters.enddate) qs.enddate = filters.enddate;
	if (filters.startdate) qs.startdate = filters.startdate;
	
	// Category filters
	if (filters.category_1) qs.category_1 = filters.category_1;
	if (filters.category_2) qs.category_2 = filters.category_2;
	if (filters.category_3) qs.category_3 = filters.category_3;
	if (filters.category_4) qs.category_4 = filters.category_4;
	
	// Client and site filters
	if (filters.client_id) qs.client_id = filters.client_id;
	if (filters.client_ids) qs.client_ids = filters.client_ids;
	if (filters.client_ref) qs.client_ref = filters.client_ref;
	if (filters.site_id) qs.site_id = filters.site_id;
	
	// Status and priority filters
	if (filters.status_id) qs.status_id = filters.status_id;
	if (filters.priority) qs.priority = filters.priority;
	
	// User and team filters
	if (filters.user_id) qs.user_id = filters.user_id;
	if (filters.username) qs.username = filters.username;
	if (filters.team) qs.team = filters.team;
	if (filters.team_name) qs.team_name = filters.team_name;
	
	// Boolean filters
	if (filters.closed_only !== undefined) qs.closed_only = filters.closed_only;
	if (filters.open_only !== undefined) qs.open_only = filters.open_only;
	if (filters.deleted !== undefined) qs.deleted = filters.deleted;
	if (filters.checkmyticketsonly !== undefined) qs.checkmyticketsonly = filters.checkmyticketsonly;
	if (filters.cf_display_values_only !== undefined) qs.cf_display_values_only = filters.cf_display_values_only;
	if (filters.debug !== undefined) qs.debug = filters.debug;
	if (filters.default_columns !== undefined) qs.default_columns = filters.default_columns;
	if (filters.enddatetime !== undefined) qs.enddatetime = filters.enddatetime;
	if (filters.startdatetime !== undefined) qs.startdatetime = filters.startdatetime;
	if (filters.excludeslacalcs !== undefined) qs.excludeslacalcs = filters.excludeslacalcs;
	if (filters.excludetickettypeallowall !== undefined) qs.excludetickettypeallowall = filters.excludetickettypeallowall;
	if (filters.fetchgrandchildren !== undefined) qs.fetchgrandchildren = filters.fetchgrandchildren;
	if (filters.ignoremilestonerestriction !== undefined) qs.ignoremilestonerestriction = filters.ignoremilestonerestriction;
	if (filters.includeallopen !== undefined) qs.includeallopen = filters.includeallopen;
	if (filters.includeappointmentid !== undefined) qs.includeappointmentid = filters.includeappointmentid;
	if (filters.includeassetkeyfield !== undefined) qs.includeassetkeyfield = filters.includeassetkeyfield;
	if (filters.includeassettype !== undefined) qs.includeassettype = filters.includeassettype;
	if (filters.includebudgettype !== undefined) qs.includebudgettype = filters.includebudgettype;
	if (filters.includechildids !== undefined) qs.includechildids = filters.includechildids;
	if (filters.includechildread !== undefined) qs.includechildread = filters.includechildread;
	if (filters.includecolumns !== undefined) qs.includecolumns = filters.includecolumns;
	if (filters.includecompleted !== undefined) qs.includecompleted = filters.includecompleted;
	if (filters.includecontract !== undefined) qs.includecontract = filters.includecontract;
	if (filters.includecountryregion !== undefined) qs.includecountryregion = filters.includecountryregion;
	if (filters.includefirstname !== undefined) qs.includefirstname = filters.includefirstname;
	if (filters.includeitilname !== undefined) qs.includeitilname = filters.includeitilname;
	if (filters.includelastaction !== undefined) qs.includelastaction = filters.includelastaction;
	if (filters.includelastincomingemail !== undefined) qs.includelastincomingemail = filters.includelastincomingemail;
	if (filters.includelastname !== undefined) qs.includelastname = filters.includelastname;
	if (filters.includelastnote !== undefined) qs.includelastnote = filters.includelastnote;
	if (filters.includelocked !== undefined) qs.includelocked = filters.includelocked;
	if (filters.includemailbox !== undefined) qs.includemailbox = filters.includemailbox;
	if (filters.includemailid !== undefined) qs.includemailid = filters.includemailid;
	if (filters.includenextactivitydate !== undefined) qs.includenextactivitydate = filters.includenextactivitydate;
	if (filters.includenextappointmenttype !== undefined) qs.includenextappointmenttype = filters.includenextappointmenttype;
	if (filters.includeparentsubject !== undefined) qs.includeparentsubject = filters.includeparentsubject;
	if (filters.includerelatedservices !== undefined) qs.includerelatedservices = filters.includerelatedservices;
	if (filters.includerelease1 !== undefined) qs.includerelease1 = filters.includerelease1;
	if (filters.includerelease2 !== undefined) qs.includerelease2 = filters.includerelease2;
	if (filters.includerelease3 !== undefined) qs.includerelease3 = filters.includerelease3;
	if (filters.includeservicecategory !== undefined) qs.includeservicecategory = filters.includeservicecategory;
	if (filters.includeslaactiondate !== undefined) qs.includeslaactiondate = filters.includeslaactiondate;
	if (filters.includeslatimer !== undefined) qs.includeslatimer = filters.includeslatimer;
	if (filters.includestatus !== undefined) qs.includestatus = filters.includestatus;
	if (filters.includesupplier !== undefined) qs.includesupplier = filters.includesupplier;
	if (filters.includetickettype !== undefined) qs.includetickettype = filters.includetickettype;
	if (filters.includetimetaken !== undefined) qs.includetimetaken = filters.includetimetaken;
	if (filters.includetoplevel !== undefined) qs.includetoplevel = filters.includetoplevel;
	if (filters.includeviewing !== undefined) qs.includeviewing = filters.includeviewing;
	if (filters.includeworkflowstage !== undefined) qs.includeworkflowstage = filters.includeworkflowstage;
	if (filters.includeworkflowstagenumber !== undefined) qs.includeworkflowstagenumber = filters.includeworkflowstagenumber;
	if (filters.includuserdepartments !== undefined) qs.includuserdepartments = filters.includuserdepartments;
	if (filters.inlcludeopenchildcount !== undefined) qs.inlcludeopenchildcount = filters.inlcludeopenchildcount;
	if (filters.invlucebranch !== undefined) qs.invlucebranch = filters.invlucebranch;
	if (filters.ismilestone !== undefined) qs.ismilestone = filters.ismilestone;
	if (filters.isorion !== undefined) qs.isorion = filters.isorion;
	if (filters.isquicktimesearch !== undefined) qs.isquicktimesearch = filters.isquicktimesearch;
	if (filters.isscom !== undefined) qs.isscom = filters.isscom;
	if (filters.isteams !== undefined) qs.isteams = filters.isteams;
	if (filters.iszapier !== undefined) qs.iszapier = filters.iszapier;
	if (filters.kanbanviewontheagentapp !== undefined) qs.kanbanviewontheagentapp = filters.kanbanviewontheagentapp;
	if (filters.kanbanviewontheportal !== undefined) qs.kanbanviewontheportal = filters.kanbanviewontheportal;
	if (filters.lastupdatefromdate !== undefined) qs.lastupdatefromdate = filters.lastupdatefromdate;
	if (filters.lastupdatetodate !== undefined) qs.lastupdatetodate = filters.lastupdatetodate;
	if (filters.mine !== undefined) qs.mine = filters.mine;
	if (filters.nochargeonly !== undefined) qs.nochargeonly = filters.nochargeonly;
	if (filters.notime !== undefined) qs.notime = filters.notime;
	if (filters.onlytime !== undefined) qs.onlytime = filters.onlytime;
	if (filters.orderdesc !== undefined) qs.orderdesc = filters.orderdesc;
	if (filters.orderdesc2 !== undefined) qs.orderdesc2 = filters.orderdesc2;
	if (filters.orderdesc3 !== undefined) qs.orderdesc3 = filters.orderdesc3;
	if (filters.orderdesc4 !== undefined) qs.orderdesc4 = filters.orderdesc4;
	if (filters.orderdesc5 !== undefined) qs.orderdesc5 = filters.orderdesc5;
	if (filters.pageinate !== undefined) qs.pageinate = filters.pageinate;
	if (filters.pending_review !== undefined) qs.pending_review = filters.pending_review;
	if (filters.per_action !== undefined) qs.per_action = filters.per_action;
	if (filters.prepayorcontractonly !== undefined) qs.prepayorcontractonly = filters.prepayorcontractonly;
	if (filters.ready_for_invoicing !== undefined) qs.ready_for_invoicing = filters.ready_for_invoicing;
	if (filters.searchactions !== undefined) qs.searchactions = filters.searchactions;
	if (filters.sitepostcode !== undefined) qs.sitepostcode = filters.sitepostcode;
	if (filters.sprints !== undefined) qs.sprints = filters.sprints;
	if (filters.startandendset !== undefined) qs.startandendset = filters.startandendset;
	if (filters.ticketidonly !== undefined) qs.ticketidonly = filters.ticketidonly;
	if (filters.unlinked_only !== undefined) qs.unlinked_only = filters.unlinked_only;
	if (filters.withattachments !== undefined) qs.withattachments = filters.withattachments;
	
	// String filters
	if (filters.domain) qs.domain = filters.domain;
	if (filters.datesearch) qs.datesearch = filters.datesearch;
	if (filters.excludethese) qs.excludethese = filters.excludethese;
	if (filters.extraportalfilter) qs.extraportalfilter = filters.extraportalfilter;
	if (filters.facebook_id) qs.facebook_id = filters.facebook_id;
	if (filters.flagged) qs.flagged = filters.flagged;
	if (filters.followedandagents) qs.followedandagents = filters.followedandagents;
	if (filters.includeapproval) qs.includeapproval = filters.includeapproval;
	if (filters.includebreached) qs.includebreached = filters.includebreached;
	if (filters.includechildren) qs.includechildren = filters.includechildren;
	if (filters.includeclosed) qs.includeclosed = filters.includeclosed;
	if (filters.include_custom_fields) qs.include_custom_fields = filters.include_custom_fields;
	if (filters.includefollowedonly) qs.includefollowedonly = filters.includefollowedonly;
	if (filters.includehold) qs.includehold = filters.includehold;
	if (filters.includeinactivetechs) qs.includeinactivetechs = filters.includeinactivetechs;
	if (filters.includeinactiveusers) qs.includeinactiveusers = filters.includeinactiveusers;
	if (filters.includemyuseronly) qs.includemyuseronly = filters.includemyuseronly;
	if (filters.includeprojects) qs.includeprojects = filters.includeprojects;
	if (filters.includeread) qs.includeread = filters.includeread;
	if (filters.includesubmittedonly) qs.includesubmittedonly = filters.includesubmittedonly;
	if (filters.itil_requesttype) qs.itil_requesttype = filters.itil_requesttype;
	if (filters.order) qs.order = filters.order;
	if (filters.order2) qs.order2 = filters.order2;
	if (filters.order3) qs.order3 = filters.order3;
	if (filters.order4) qs.order4 = filters.order4;
	if (filters.order5) qs.order5 = filters.order5;
	if (filters.product) qs.product = filters.product;
	if (filters.project_ids) qs.project_ids = filters.project_ids;
	// Handle requesttype multiOptions - convert array to comma-separated string
	if (filters.requesttype && Array.isArray(filters.requesttype) && filters.requesttype.length > 0) {
		qs.requesttype = filters.requesttype.join(',');
	}
	// Handle status multiOptions - convert array to comma-separated string
	if (filters.status && Array.isArray(filters.status) && filters.status.length > 0) {
		qs.status = filters.status.join(',');
	}
	if (filters.requesttypegroup) qs.requesttypegroup = filters.requesttypegroup;
	if (filters.search) qs.search = filters.search;
	if (filters.search_details) qs.search_details = filters.search_details;
	if (filters.search_id) qs.search_id = filters.search_id;
	if (filters.search_inventory_number) qs.search_inventory_number = filters.search_inventory_number;
	if (filters.search_oppcompanyname) qs.search_oppcompanyname = filters.search_oppcompanyname;
	if (filters.search_oppcontactname) qs.search_oppcontactname = filters.search_oppcontactname;
	if (filters.search_oppemailaddress) qs.search_oppemailaddress = filters.search_oppemailaddress;
	if (filters.search_release1) qs.search_release1 = filters.search_release1;
	if (filters.search_release2) qs.search_release2 = filters.search_release2;
	if (filters.search_release3) qs.search_release3 = filters.search_release3;
	if (filters.search_releasenote) qs.search_releasenote = filters.search_releasenote;
	if (filters.search_reportedby) qs.search_reportedby = filters.search_reportedby;
	if (filters.search_summary) qs.search_summary = filters.search_summary;
	if (filters.search_supplier_reference) qs.search_supplier_reference = filters.search_supplier_reference;
	if (filters.search_user_name) qs.search_user_name = filters.search_user_name;
	if (filters.search_version) qs.search_version = filters.search_version;
	if (filters.showonroadmap) qs.showonroadmap = filters.showonroadmap;
	if (filters.sla) qs.sla = filters.sla;
	if (filters.submittedandagents) qs.submittedandagents = filters.submittedandagents;
	if (filters.supplier_status) qs.supplier_status = filters.supplier_status;
	if (filters.third_party_id_string) qs.third_party_id_string = filters.third_party_id_string;
	if (filters.ticketids) qs.ticketids = filters.ticketids;
	
	// Number filters
	if (filters.columns_id) qs.columns_id = filters.columns_id;
	if (filters.contract_id) qs.contract_id = filters.contract_id;
	if (filters.contract_period) qs.contract_period = filters.contract_period;
	if (filters.itil_requesttype_id) qs.itil_requesttype_id = filters.itil_requesttype_id;
	if (filters.list_id) qs.list_id = filters.list_id;
	if (filters.milestone_id) qs.milestone_id = filters.milestone_id;
	if (filters.orion_type) qs.orion_type = filters.orion_type;
	if (filters.page_no) qs.page_no = filters.page_no;
	if (filters.page_size) qs.page_size = filters.page_size;
	if (filters.parent_id) qs.parent_id = filters.parent_id;
	if (filters.related_id) qs.related_id = filters.related_id;
	if (filters.release_id) qs.release_id = filters.release_id;
	if (filters.requesttype_id) qs.requesttype_id = filters.requesttype_id;
	if (filters.searchthisticketid) qs.searchthisticketid = filters.searchthisticketid;
	if (filters.service_id) qs.service_id = filters.service_id;
	if (filters.sprint_for_tickettype_id) qs.sprint_for_tickettype_id = filters.sprint_for_tickettype_id;
	if (filters.supplier_id) qs.supplier_id = filters.supplier_id;
	if (filters.third_party_id) qs.third_party_id = filters.third_party_id;
	if (filters.ticketarea_id) qs.ticketarea_id = filters.ticketarea_id;
	if (filters.ticketcontract_id) qs.ticketcontract_id = filters.ticketcontract_id;
	if (filters.ticketlinktype) qs.ticketlinktype = filters.ticketlinktype;
	if (filters.toplevel_id) qs.toplevel_id = filters.toplevel_id;
	if (filters.utcoffset) qs.utcoffset = filters.utcoffset;
	if (filters.view_id) qs.view_id = filters.view_id;
	
	// Include fields
	if (filters.includeaccountmanager !== undefined) qs.includeaccountmanager = filters.includeaccountmanager;
	if (filters.includeagent !== undefined) qs.includeagent = filters.includeagent;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Tickets';
	const body = {} as IDataObject;

	let responseData: HaloTicketsListResponse;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	// Return the tickets array from the response
	return this.helpers.returnJsonArray(responseData.tickets || []);
}