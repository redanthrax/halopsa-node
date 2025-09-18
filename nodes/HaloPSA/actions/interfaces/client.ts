// Client operation interfaces
export interface ClientGetAllParams {
	accountmanageronly?: boolean;
	activeinactive?: string;
	advanced_search?: string;
	azureclients?: boolean;
	callplan?: boolean;
	columns_id?: number;
	count?: number;
	domain?: string;
	exclude_internal?: boolean;
	gficlients?: boolean;
	idonly?: boolean;
	includeactive?: boolean;
	includeazuretenants?: boolean;
	includecolumns?: boolean;
	includeinactive?: boolean;
	includeinvoicetemplatename?: boolean;
	includenotes?: boolean;
	includeqbofields?: boolean;
	include_custom_fields?: string;
	integration_tenantids?: number[];
	integration_type?: string;
	isjira?: boolean;
	issentinel?: boolean;
	isservicenow?: boolean;
	lastupdatefromdate?: boolean;
	lastupdatetodate?: boolean;
	order?: string;
	order2?: string;
	order3?: string;
	order4?: string;
	order5?: string;
	orderdesc?: boolean;
	orderdesc2?: boolean;
	orderdesc3?: boolean;
	orderdesc4?: boolean;
	orderdesc5?: boolean;
	page_no?: number;
	page_size?: number;
	pageinate?: boolean;
	search?: string;
	search_name_only?: string;
	sentinelid?: number;
	showcounts?: boolean;
	sitefields?: string;
	snowaccountid?: number;
	snowclients?: boolean;
	ticketarea_id?: number;
	toplevel_id?: number;
	view_id?: number;
}

export interface ClientGetByIdParams {
	id: number;
	domain?: string;
	getavailablerts?: boolean;
	includeactivity?: boolean;
	includedetails?: boolean;
	includeperiods?: boolean;
	includeprepay?: boolean;
	tickettype_id?: number;
}

export interface ClientCreateParams {
	name: string;
	toplevel_id?: number;
	inactive?: boolean;
	colour?: string;
	notes?: string;
	[key: string]: any;
}

export interface ClientUpdateParams {
	id: number;
	name?: string;
	toplevel_id?: number;
	inactive?: boolean;
	colour?: string;
	notes?: string;
	[key: string]: any;
}

export interface ClientDeleteParams {
	id: number;
}

// Client response interfaces based on actual API responses
export interface CustomField {
	id: number;
	name: string;
	label: string;
	summary: string;
	type: number;
	value: string;
	display: string;
	characterlimit: number;
	characterlimittype: number;
	inputtype: number;
	copytochild: boolean;
	copytoparent: boolean;
	searchable: boolean;
	ordervalues: boolean;
	ordervaluesby: number;
	database_lookup_auto: boolean;
	copytochildonupdate: boolean;
	copytoparentonupdate: boolean;
	usage: number;
	showondetailsscreen: boolean;
	custom_extra_table_id: number;
	copytorelated: boolean;
	calculation: string;
	rounding: number;
	regex: string;
	is_horizontal: boolean;
	isencrypted: boolean;
	max_selection: number;
	guid: string;
	selection_field_id: number;
	showintable: boolean;
	details_column_group: number;
}

export interface CustomerRelationship {
	id: string;
	name: string;
}

export interface ClientResponse {
	id: number;
	name: string;
	toplevel_id: number;
	toplevel_name: string;
	inactive: boolean;
	colour: string;
	confirmemail: number;
	actionemail: number;
	clearemail: number;
	messagegroup_id: number;
	mailbox_override: number;
	default_mailbox_id: number;
	calldate: string;
	item_tax_code: number;
	service_tax_code: number;
	prepay_tax_code: number;
	contract_tax_code: number;
	pritech: number;
	sectech: number;
	accountmanagertech: number;
	notes: string;
	use: string;
	key: number;
	table: number;
	xero_tenant_id: string;
	accountsid: string;
	excludefrominvoicesync: boolean;
	overridepdftemplateinvoice: number;
	client_to_invoice: number;
	invoiceduedaysextraclient: number;
	itglue_id: string;
	sentinel_subscription_id: string;
	sentinel_workspace_name: string;
	sentinel_resource_group_name: string;
	default_currency_code: number;
	client_to_invoice_recurring: number;
	qbo_company_id: string;
	dbc_company_id: string;
	stopped: number;
	customertype: number;
	customer_relationship: CustomerRelationship[];
	customer_relationship_list: string;
	servicenow_validated: boolean;
	jira_validated: boolean;
	ticket_invoices_for_each_site: boolean;
	is_vip: boolean;
	taxable: boolean;
	percentage_to_survey: number;
	billing_plan_text: string;
	overridepdftemplatequote: number;
	due_date_type: number;
	is_account: boolean;
	customfields?: CustomField[];
	custombuttons?: any[];
	[key: string]: any;
}

export interface ClientListResponse {
	record_count: number;
	clients: ClientResponse[];
}