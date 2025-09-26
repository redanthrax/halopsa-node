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
	
	if (filters.activeinactive) qs.activeinactive = filters.activeinactive;
	if (filters.advanced_search) qs.advanced_search = filters.advanced_search;
	if (filters.allapprovers !== undefined) qs.allapprovers = filters.allapprovers;
	if (filters.approvers_only !== undefined) qs.approvers_only = filters.approvers_only;
	if (filters.asset_id) qs.asset_id = filters.asset_id;
	if (filters.client_id) qs.client_id = filters.client_id;
	if (filters.contract_id) qs.contract_id = filters.contract_id;
	if (filters.department_id) qs.department_id = filters.department_id;
	if (filters.exclude_agents !== undefined) qs.exclude_agents = filters.exclude_agents;
	if (filters.exclude_defaultsiteusers !== undefined) {
		qs.exclude_defaultsiteusers = filters.exclude_defaultsiteusers;
	}
	if (filters.exclude_generaluser !== undefined) qs.exclude_generaluser = filters.exclude_generaluser;
	if (filters.idonly !== undefined) qs.idonly = filters.idonly;
	if (filters.includeactive !== undefined) qs.includeactive = filters.includeactive;
	if (filters.includebillinginfo !== undefined) qs.includebillinginfo = filters.includebillinginfo;
	if (filters.include_custom_fields) qs.include_custom_fields = filters.include_custom_fields;
	if (filters.includeinactive !== undefined) qs.includeinactive = filters.includeinactive;
	if (filters.includename !== undefined) qs.includename = filters.includename;
	if (filters.includenonserviceaccount !== undefined) {
		qs.includenonserviceaccount = filters.includenonserviceaccount;
	}
	if (filters.includenotes !== undefined) qs.includenotes = filters.includenotes;
	if (filters.includeserviceaccount !== undefined) {
		qs.includeserviceaccount = filters.includeserviceaccount;
	}
	if (filters.integration_type) qs.integration_type = filters.integration_type;
	if (filters.is3cxcall !== undefined) qs.is3cxcall = filters.is3cxcall;
	if (filters.is_followers !== undefined) qs.is_followers = filters.is_followers;
	if (filters.lastupdatefromdate !== undefined) qs.lastupdatefromdate = filters.lastupdatefromdate;
	if (filters.lastupdatetodate !== undefined) qs.lastupdatetodate = filters.lastupdatetodate;
	if (filters.licence_id) qs.licence_id = filters.licence_id;
	if (filters.linked_to_user_id) qs.linked_to_user_id = filters.linked_to_user_id;
	if (filters.listagentuserfirst !== undefined) qs.listagentuserfirst = filters.listagentuserfirst;
	if (filters.myallcustomers !== undefined) qs.myallcustomers = filters.myallcustomers;
	if (filters.myarea !== undefined) qs.myarea = filters.myarea;
	if (filters.mydepartment !== undefined) qs.mydepartment = filters.mydepartment;
	if (filters.mysite !== undefined) qs.mysite = filters.mysite;
	if (filters.mysitecontact !== undefined) qs.mysitecontact = filters.mysitecontact;
	if (filters.mytoplevel !== undefined) qs.mytoplevel = filters.mytoplevel;
	if (filters.opp_id) qs.opp_id = filters.opp_id;
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
	if (filters.organisation_id) qs.organisation_id = filters.organisation_id;
	if (filters.page_no) qs.page_no = filters.page_no;
	if (filters.page_size) qs.page_size = filters.page_size;
	if (filters.pageinate !== undefined) qs.pageinate = filters.pageinate;
	if (filters.role) qs.role = filters.role;
	if (filters.search) qs.search = filters.search;
	if (filters.search_phonenumbers !== undefined) qs.search_phonenumbers = filters.search_phonenumbers;
	if (filters.site_id) qs.site_id = filters.site_id;
	if (filters.supplier_id) qs.supplier_id = filters.supplier_id;
	if (filters.tickettype_id) qs.tickettype_id = filters.tickettype_id;
	if (filters.toplevel_id) qs.toplevel_id = filters.toplevel_id;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.count = limit;
	}

	try {
		const response = await apiRequest.call(this, 'GET', '/Users', {}, qs);
		
		let users = [];
		if (response && response.users) {
			users = Array.isArray(response.users) ? response.users : [response.users];
		} else if (Array.isArray(response)) {
			users = response;
		}

		return users.map((user: any) => ({
			json: user,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw error;
	}
}