import { IDataObject } from 'n8n-workflow';
import { ClientResponse, CustomField } from './client';

export interface HaloSiteAddress extends IDataObject {
	id?: number;
	type?: number;
	line1?: string;
	line2?: string;
	line3?: string;
	line4?: string;
	postcode?: string;
	primary?: boolean;
	inactive?: boolean;
	date_active?: string;
	site_id?: number;
}

export interface HaloSiteField extends IDataObject {
	id?: number;
	name?: string;
	validate?: string;
	value?: string;
	display?: string;
	mandatory?: boolean;
	showonactivity?: boolean;
	lookup?: number;
	systemuse?: number;
	parenttype_id?: number;
	url?: string;
	access_level?: number;
}

export interface HaloSitePopupNote extends IDataObject {
	id?: number;
	note?: string;
	date_created?: string;
	created_by?: number;
	site_id?: number;
}

export interface HaloQuickBooksDetails extends IDataObject {
	id?: number;
	name?: string;
	country?: string;
	company_id?: string;
	company_name?: string;
	token_expiry?: string;
	authorized?: boolean;
	redirect_uri?: string;
	new_method?: boolean;
	automatic_sales_tax?: boolean;
	online_payments?: boolean;
	accept_credit_card?: boolean;
	accept_bank_transfer?: boolean;
	api_url?: string;
	client_id?: string;
	default_tax_code_id?: number;
	default_tax_code_name?: string;
	zero_tax_rate_id?: number;
	zero_tax_rate_name?: string;
	client_top_level?: number;
	client_name_field?: number;
	inventory_item_group?: number;
	non_inventory_item_group?: number;
	service_item_group?: number;
	enable_sync?: boolean;
	sync_entities?: string;
	sync_entities_list?: Array<{
		value?: string;
		label?: string;
	}>;
	show_message?: boolean;
	deactivate_customers?: boolean;
	default_invoice_item?: number;
	default_order_item?: number;
	invoice_email_status?: number;
	supplier_top_level?: number;
	supplier_name_field?: number;
	default_order_account_id?: number;
	default_order_account_name?: string;
	order_email_status?: number;
	multi_currency?: boolean;
	default_sales_account_id?: number;
	default_sales_account_name?: string;
	default_expense_account_id?: number;
	default_expense_account_name?: string;
	default_asset_account_id?: number;
	default_asset_account_name?: string;
	receive_client_created?: boolean;
	receive_client_updated?: boolean;
	receive_payment_created?: boolean;
	receive_payment_updated?: boolean;
	receive_payment_deleted_and_voided?: boolean;
	round_payments_to_2dp?: boolean;
	dont_post_item_quantities?: boolean;
	dont_sync_cost_tracking_lines?: boolean;
	app_type?: number;
	instance_type?: number;
}

export interface HaloSiteContact extends IDataObject {
	id?: number;
	site?: number;
	uid?: number;
	user_name?: string;
	user_email?: string;
	type?: number;
	type_name?: string;
}

export interface HaloExtraTab extends IDataObject {
	id?: number;
	guid?: string;
	name?: string;
	tableid?: number;
	columns?: number;
	sequence?: number;
	type?: number;
	linked_dashboard_id?: number;
	send_secure_url_parameter?: boolean;
	module_id?: number;
}

export interface HaloSite extends IDataObject {
	id: number;
	name?: string;
	client_id?: number;
	client_name?: string;
	clientsite_name?: string;
	inactive?: boolean;
	sla_id?: number;
	phonenumber?: string;
	colour?: string;
	timezone?: string;
	invoice_address_isdelivery?: boolean;
	isstocklocation?: boolean;
	messagegroup_id?: number;
	datecreated?: string;
	isinvoicesite?: boolean;
	refnumber?: number;
	defaultdelivery?: boolean;
	stopped?: number;
	sitedateformat?: number;
	contractlastchecked?: string;
	maincontact_name?: string;
	maincontact_id?: number;
	language_id?: number;
	language_name?: string;
	slocked?: boolean;
	use?: string;
	itglue_id?: string;
	client_itglue_id?: string;
	site_item_tax_code?: number;
	site_service_tax_code?: number;
	site_prepay_tax_code?: number;
	site_contract_tax_code?: number;
	site_purchase_tax_code?: number;
	site_item_tax_code_name?: string;
	site_service_tax_code_name?: string;
	site_contract_tax_code_name?: string;
	site_prepay_tax_code_name?: string;
	site_purchase_tax_code_name?: string;
	default_currency_code?: number;
	default_currency_code_name?: string;
	default_client_currency_code?: number;
	country_code?: string;
	region_code?: number;
	country_code_name?: string;
	region_code_name?: string;
	taxable?: number;
	
	client?: ClientResponse;
	delivery_address?: HaloSiteAddress;
	popup_notes?: HaloSitePopupNote[];
	fields?: HaloSiteField[];
	sitecontacts?: HaloSiteContact[];
	customfields?: CustomField[];
	custombuttons?: any[];
	external_links?: any[];
	extratabs?: HaloExtraTab[];
	faqlists?: any[];
	all_faqlists_allowed?: boolean;
	
	ninjarmmid?: number;
	servicenowid?: string;
	isnhserveremaildefault?: boolean;
	datto_id?: string;
	datto_alternate_id?: number;
	datto_url?: string;
	connectwiseid?: number;
	azuretenantid?: string;
	autotaskid?: number;
	pagerdutywildcard?: string;
	ateraid?: number;
	slastupdate?: string;
	syncroid?: number;
	auvik_id?: string;
	hubspot_id?: string;
	passportal_id?: number;
	liongardid?: number;
	
	key?: number;
	table?: number;
}

export interface HaloSiteListResponse extends IDataObject {
	sites?: HaloSite[];
	record_count?: number;
}

export interface HaloSiteResponse extends HaloSite {}