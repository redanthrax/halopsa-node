import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest, apiRequestAllItems } from '../../../transport';
import { HaloActionsListResponse } from '../../interfaces/actions';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	
	if (filters.ticket_id) qs.ticket_id = filters.ticket_id;
	if (filters.actoutcome) qs.actoutcome = filters.actoutcome;
	if (filters.actoutcomenum) qs.actoutcomenum = filters.actoutcomenum;
	
	if (filters.agentonly !== undefined) qs.agentonly = filters.agentonly;
	if (filters.conversationonly !== undefined) qs.conversationonly = filters.conversationonly;
	
	if (filters.startdate) qs.startdate = filters.startdate;
	if (filters.enddate) qs.enddate = filters.enddate;
	if (filters.datesearch) qs.datesearch = filters.datesearch;
	
	if (filters.excludebilling !== undefined) qs.excludebilling = filters.excludebilling;
	if (filters.excludehiddenfrominternalit !== undefined) qs.excludehiddenfrominternalit = filters.excludehiddenfrominternalit;
	if (filters.excludeprivate !== undefined) qs.excludeprivate = filters.excludeprivate;
	if (filters.excludesys !== undefined) qs.excludesys = filters.excludesys;
	if (filters.importantonly !== undefined) qs.importantonly = filters.importantonly;
	if (filters.importanttop !== undefined) qs.importanttop = filters.importanttop;
	if (filters.slaonly !== undefined) qs.slaonly = filters.slaonly;
	if (filters.supplieronly !== undefined) qs.supplieronly = filters.supplieronly;
	if (filters.timeentriesonly !== undefined) qs.timeentriesonly = filters.timeentriesonly;
	
	if (filters.includeagentdetails !== undefined) qs.includeagentdetails = filters.includeagentdetails;
	if (filters.includeattachments !== undefined) qs.includeattachments = filters.includeattachments;
	if (filters.includefacebookfields !== undefined) qs.includefacebookfields = filters.includefacebookfields;
	if (filters.includehtmlemail !== undefined) qs.includehtmlemail = filters.includehtmlemail;
	if (filters.includehtmlnote !== undefined) qs.includehtmlnote = filters.includehtmlnote;
	if (filters.includenonactionattachments !== undefined) qs.includenonactionattachments = filters.includenonactionattachments;
	if (filters.includetranslations !== undefined) qs.includetranslations = filters.includetranslations;
	if (filters.includetwitterfields !== undefined) qs.includetwitterfields = filters.includetwitterfields;
	
	if (filters.intraticketonly !== undefined) qs.intraticketonly = filters.intraticketonly;
	if (filters.ischildnotes !== undefined) qs.ischildnotes = filters.ischildnotes;
	if (filters.isrelatednotes !== undefined) qs.isrelatednotes = filters.isrelatednotes;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Actions';
	const body = {} as IDataObject;

if (returnAll) {
	const all = await apiRequestAllItems.call(this, requestMethod, endpoint, 'actions', body, qs);
	return this.helpers.returnJsonArray(all);
}

let responseData: HaloActionsListResponse;
responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
return this.helpers.returnJsonArray(responseData.actions || []);
}