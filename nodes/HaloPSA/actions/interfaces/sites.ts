import { IDataObject } from 'n8n-workflow';
import { ClientResponse, CustomField } from './client';

// Site address interface
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

// Site field interface
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

// Site popup note interface
export interface HaloSitePopupNote extends IDataObject {
	id?: number;
	note?: string;
	date_created?: string;
	created_by?: number;
	site_id?: number;
}

// QuickBooks details interface (simplified for sites)
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

// Site interface based on API response
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
	slocked?: boolean;
	use?: string;
	itglue_id?: string;
	site_item_tax_code?: number;
	site_service_tax_code?: number;
	site_prepay_tax_code?: number;
	site_contract_tax_code?: number;
	site_purchase_tax_code?: number;
	default_currency_code?: number;
	default_client_currency_code?: number;
	
	// Extended fields for getById response
	client?: ClientResponse;
	delivery_address?: HaloSiteAddress;
	popup_notes?: HaloSitePopupNote[];
	fields?: HaloSiteField[];
	customfields?: CustomField[];
	custombuttons?: any[];
	external_links?: any[];
	
	// Integration IDs
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
	
	// Location and tax information
	country_code?: string;
	region_code?: number;
	taxable?: number;
	
	// FAQ and permissions
	all_faqlists_allowed?: boolean;
}

// Response structures
export interface HaloSiteListResponse extends IDataObject {
	sites?: HaloSite[];
	record_count?: number;
}

// Single site response (API returns object directly)
export interface HaloSiteResponse extends HaloSite {}