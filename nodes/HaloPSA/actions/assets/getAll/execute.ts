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
	// Basic filters
	if (filters.activeinactive) qs.activeinactive = filters.activeinactive;
	if (filters.advanced_search) qs.advanced_search = filters.advanced_search;
	if (filters.assetgroup_id) qs.assetgroup_id = filters.assetgroup_id;
	if (filters.assetgroups) qs.assetgroups = filters.assetgroups;
	if (filters.assets) qs.assets = filters.assets;
	if (filters.assetstatuses) qs.assetstatuses = filters.assetstatuses;
	if (filters.assettype) qs.assettype = filters.assettype;
	if (filters.assettype_id) qs.assettype_id = filters.assettype_id;
	if (filters.assettypes) qs.assettypes = filters.assettypes;
	
	// Boolean filters
	if (filters.bookmarked !== undefined) qs.bookmarked = filters.bookmarked;
	if (filters.consignable !== undefined) qs.consignable = filters.consignable;
	if (filters.domotzagents !== undefined) qs.domotzagents = filters.domotzagents;
	if (filters.idonly !== undefined) qs.idonly = filters.idonly;
	if (filters.includeactive !== undefined) qs.includeactive = filters.includeactive;
	if (filters.includeallowedstatus !== undefined) qs.includeallowedstatus = filters.includeallowedstatus;
	if (filters.includeassetfields !== undefined) qs.includeassetfields = filters.includeassetfields;
	if (filters.includechildren !== undefined) qs.includechildren = filters.includechildren;
	if (filters.includecolumns !== undefined) qs.includecolumns = filters.includecolumns;
	if (filters.includeinactive !== undefined) qs.includeinactive = filters.includeinactive;
	if (filters.includeservices !== undefined) qs.includeservices = filters.includeservices;
	if (filters.includeuser !== undefined) qs.includeuser = filters.includeuser;
	if (filters.islogonbehalfview !== undefined) qs.islogonbehalfview = filters.islogonbehalfview;
	if (filters.lastupdatefromdate !== undefined) qs.lastupdatefromdate = filters.lastupdatefromdate;
	if (filters.lastupdatetodate !== undefined) qs.lastupdatetodate = filters.lastupdatetodate;
	if (filters.linked_to_ticket !== undefined) qs.linked_to_ticket = filters.linked_to_ticket;
	if (filters.mine !== undefined) qs.mine = filters.mine;
	if (filters.mysite !== undefined) qs.mysite = filters.mysite;
	if (filters.noicon !== undefined) qs.noicon = filters.noicon;
	if (filters.orderdesc !== undefined) qs.orderdesc = filters.orderdesc;
	if (filters.orderdesc2 !== undefined) qs.orderdesc2 = filters.orderdesc2;
	if (filters.orderdesc3 !== undefined) qs.orderdesc3 = filters.orderdesc3;
	if (filters.orderdesc4 !== undefined) qs.orderdesc4 = filters.orderdesc4;
	if (filters.orderdesc5 !== undefined) qs.orderdesc5 = filters.orderdesc5;
	if (filters.pageinate !== undefined) qs.pageinate = filters.pageinate;
	if (filters.previously_selected !== undefined) qs.previously_selected = filters.previously_selected;
	if (filters.search_inventory_number_only !== undefined) qs.search_inventory_number_only = filters.search_inventory_number_only;
	
	// Number filters
	if (filters.client_id) qs.client_id = filters.client_id;
	if (filters.columns_id) qs.columns_id = filters.columns_id;
	if (filters.consignment_id) qs.consignment_id = filters.consignment_id;
	if (filters.contract_id) qs.contract_id = filters.contract_id;
	if (filters.contract_id_adding_to) qs.contract_id_adding_to = filters.contract_id_adding_to;
	if (filters.item_id) qs.item_id = filters.item_id;
	if (filters.itemstock_id) qs.itemstock_id = filters.itemstock_id;
	if (filters.kb_id) qs.kb_id = filters.kb_id;
	if (filters.licence_id) qs.licence_id = filters.licence_id;
	if (filters.linkedto_id) qs.linkedto_id = filters.linkedto_id;
	if (filters.page_no) qs.page_no = filters.page_no;
	if (filters.page_size) qs.page_size = filters.page_size;
	if (filters.previously_selected_client_id) qs.previously_selected_client_id = filters.previously_selected_client_id;
	if (filters.previously_selected_site_id) qs.previously_selected_site_id = filters.previously_selected_site_id;
	if (filters.previously_selected_user_id) qs.previously_selected_user_id = filters.previously_selected_user_id;
	if (filters.salesorder_id) qs.salesorder_id = filters.salesorder_id;
	if (filters.salesorder_line) qs.salesorder_line = filters.salesorder_line;
	if (filters.service_id) qs.service_id = filters.service_id;
	if (filters.site_id) qs.site_id = filters.site_id;
	if (filters.stockbin_id) qs.stockbin_id = filters.stockbin_id;
	if (filters.supplier_contract_id) qs.supplier_contract_id = filters.supplier_contract_id;
	if (filters.supplier_id) qs.supplier_id = filters.supplier_id;
	if (filters.ticket_id) qs.ticket_id = filters.ticket_id;
	if (filters.tickettype_id) qs.tickettype_id = filters.tickettype_id;
	if (filters.user_id) qs.user_id = filters.user_id;
	
	// String filters
	if (filters.excludethese) qs.excludethese = filters.excludethese;
	if (filters.globalSearchID) qs.globalSearchID = filters.globalSearchID;
	// Handle include_custom_fields multiOptions - convert array to comma-separated string
	if (filters.include_custom_fields && Array.isArray(filters.include_custom_fields) && filters.include_custom_fields.length > 0) {
		qs.include_custom_fields = filters.include_custom_fields.join(',');
	} else if (filters.include_custom_fields && typeof filters.include_custom_fields === 'string') {
		qs.include_custom_fields = filters.include_custom_fields;
	}
	if (filters.integration_tenantids) qs.integration_tenantids = filters.integration_tenantids;
	if (filters.integration_type) qs.integration_type = filters.integration_type;
	if (filters.inventory_number) qs.inventory_number = filters.inventory_number;
	if (filters.order) qs.order = filters.order;
	if (filters.order2) qs.order2 = filters.order2;
	if (filters.order3) qs.order3 = filters.order3;
	if (filters.order4) qs.order4 = filters.order4;
	if (filters.order5) qs.order5 = filters.order5;
	if (filters.search) qs.search = filters.search;
	if (filters.service_ids) qs.service_ids = filters.service_ids;
	if (filters.stockbin_ids) qs.stockbin_ids = filters.stockbin_ids;
	if (filters.suppliercontracts) qs.suppliercontracts = filters.suppliercontracts;
	if (filters.username) qs.username = filters.username;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Asset';
	const body = {} as IDataObject;

	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	// Return the assets array from the response, or the response directly if it's an array
	return this.helpers.returnJsonArray(responseData.assets || responseData || []);
}