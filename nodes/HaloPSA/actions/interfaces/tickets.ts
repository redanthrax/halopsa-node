import { IDataObject } from 'n8n-workflow';
import { HaloAddress, HaloPriority } from './common';

// Response structure for /Tickets endpoint (list)
export interface HaloTicketsListResponse extends IDataObject {
	record_count: number;
	tickets: HaloTicketSummary[];
	include_children: boolean;
}

// Ticket structure from /Tickets endpoint (summary view)
export interface HaloTicketSummary extends IDataObject {
	id: number;
	dateoccurred?: string;
	summary?: string;
	details?: string;
	status_id?: number;
	tickettype_id?: number;
	sla_id?: number;
	priority_id?: number;
	client_id?: number;
	client_name?: string;
	site_id?: number;
	site_name?: string;
	user_id?: number;
	user_name?: string;
	team_id?: number;
	team?: string;
	agent_id?: number;
	category_1?: string;
	category_2?: string;
	category_3?: string;
	category_4?: string;
	estimate?: number;
	estimatedays?: number;
	child_count?: number;
	attachment_count?: number;
	flagged?: boolean;
	read?: boolean;
	enduserstatus?: number;
	onhold?: boolean;
	respondbydate?: string;
	fixbydate?: string;
	excludefromsla?: boolean;
	slaholdtime?: number;
	site_timezone?: string;
	lastactiondate?: string;
	last_update?: string;
	organisation_id?: number;
	department_id?: number;
	reportedby?: string;
	user_email?: string;
	emailtolist?: string;
	emailcclist?: string;
	matched_kb_id?: number;
	product_id?: number;
	release_id?: number;
	release2_id?: number;
	release3_id?: number;
	lastincomingemail?: string;
	workflow_id?: number;
	workflow_step?: number;
	workflow_seq?: number;
	pipeline_stage_id?: number;
	is_vip?: boolean;
	isimportantcontact?: boolean;
	inactive?: boolean;
	impact?: number;
	urgency?: number;
	starttime?: string;
	starttimeslot?: number;
	targetdate?: string;
	targettime?: string;
	targettimeslot?: number;
	deadlinedate?: string;
	oppcompanyname?: string;
	oppvalueadjusted?: number;
	cost?: number;
	quantity?: number;
	userdef1?: string;
	userdef2?: string;
	userdef3?: string;
	userdef4?: string;
	userdef5?: string;
	source?: number;
	release_important?: boolean;
	releasenotegroup_id?: number;
	supplier_status?: number;
	appointment_type?: number;
	section_timezone?: string;
	projectinternaltask?: boolean;
	impactlevel?: number;
	guid?: string;
	reviewed?: boolean;
	merged_into_id?: number;
	table?: number;
	use?: string;
	maximumRestrictedPriority?: number;
	idsummary?: string;
	ticketage?: number;
	useful_count?: number;
	notuseful_count?: number;
	updateservicestatus?: boolean;
	servicestatusnote?: string;
	itil_requesttype_id?: number;
	ticket_tags?: string;
	invoiceseperatelyoverride?: boolean;
	purchaseordernumber?: string;
}

// Full ticket structure for /Tickets/{id} endpoint (detailed view)
export interface HaloTicketDetailed extends HaloTicketSummary {
	// Additional fields available in detailed view
	sla_name?: string;
	status_name?: string;
	tickettype_name?: string;
	agent_name?: string;
	priority?: HaloPriority;
	details_html?: string;
	timetaken?: number;
	supplier_name?: string;
	slaactiondate?: string;
	slapercused?: number;
	slatimeleft?: number;
	currentelapsedhours?: number;
	product_name?: string;
	workflow_name?: string;
	pipeline_stage_name?: string;
	oppcontactname?: string;
	oppemailaddress?: string;
	opptel?: string;
	oppaddr1?: string;
	oppaddr2?: string;
	oppaddr3?: string;
	oppaddr4?: string;
	opppostcode?: string;
	oppcountry?: string;
	oppregion?: string;
	opptype?: string;
	opptimezonename?: string;
	customfields?: IDataObject[];
	phonenumber?: string;
	takenby?: string;
	datecreated?: string;
	createdfrom_id?: number;
	top_level_id?: number;
	customer_relationships?: string;
	site_sla_id?: number;
	supplier_contract_id?: number;
	supplier_breachrespsent?: boolean;
	supplier_breachfixbysent?: boolean;
	showforusers?: boolean;
	messsent?: string;
	agreedcleared?: boolean;
	alsoinform?: string;
	backoutplan?: string;
	communicationplan?: string;
	testplan?: string;
	riskdescription?: string;
	risklevel?: number;
	impactdescription?: string;
	surveysent?: boolean;
	approval_process_step_name?: string;
	inform3rdpartysystem?: boolean;
	delivery_address?: HaloAddress;
	surveyneeded?: boolean;
	knownerror?: boolean;
	development?: boolean;
	changeseq?: number;
	mailboxid?: number;
	actisbillabledefault?: boolean;
	chargerate?: number;
	timezonename?: string;
	forwardinboundupdates?: boolean;
	loggedoutofhdworkinghours?: boolean;
	acctmaninformedsurvey?: boolean;
	laststatuschangeinformed?: number;
	loggedonbehalfby?: string;
	auditstatus?: number;
	auditunum?: number;
	auditdate?: string;
	oppdontaddtomailinglist?: boolean;
	sendprintrequest?: number;
	pagerdutyid?: string;
	pagerdutyincidentidstring?: string;
	pagerdutystatus?: number;
	component_id?: number;
	version_id?: number;
	mailentryid?: string;
	contract_id?: number;
	billing_address?: HaloAddress;
	workflow_stepstarted?: string;
	laststatuschangeinformedmanager?: number;
	currency?: number;
	projectconsignmentheaderid?: number;
	projectconsignmentdetailid?: number;
	servicefailurestid?: number;
	hdid?: number;
	deleted?: boolean;
	matched_rule_id?: number;
	ignore_kb_match?: boolean;
	deadlinenotificationhours?: number;
	showonroadmap?: boolean;
	phonenumberfrom?: string;
	addressfrom?: string;
	changeinformation_html?: string;
	team_department_id?: number;
}

// For creating new tickets - comprehensive fields based on the full API response
export interface HaloTicketCreate extends IDataObject {
	// Core required fields
	summary: string;
	
	// Optional core fields
	dateoccurred?: string;
	details?: string;
	details_html?: string;
	tickettype_id?: number;
	status_id?: number;
	priority_id?: number;
	sla_id?: number;
	
	// Client and site information
	client_id?: number;
	site_id?: number;
	user_id?: number;
	
	// Assignment
	agent_id?: number;
	team_id?: number;
	
	// Categories
	category_1?: string;
	category_2?: string;
	category_3?: string;
	category_4?: string;
	categoryid_1?: number;
	categoryid_2?: number;
	categoryid_3?: number;
	categoryid_4?: number;
	
	// Time and estimation
	estimate?: number;
	estimatedays?: number;
	
	// Contact information
	reportedby?: string;
	user_email?: string;
	emailtolist?: string;
	emailcclist?: string;
	phonenumber?: string;
	
	// Product and knowledge base
	product_id?: number;
	matched_kb_id?: number;
	
	// Impact and urgency
	impact?: number;
	urgency?: number;
	impactlevel?: number;
	
	// Opportunity fields
	oppcontactname?: string;
	oppcompanyname?: string;
	oppemailaddress?: string;
	opptel?: string;
	oppaddr1?: string;
	oppaddr2?: string;
	oppaddr3?: string;
	oppaddr4?: string;
	opppostcode?: string;
	oppcountry?: string;
	oppregion?: string;
	opptype?: string;
	oppvalueadjusted?: number;
	opptimezonename?: string;
	oppdontaddtomailinglist?: boolean;
	
	// Financial
	cost?: number;
	quantity?: number;
	
	// Scheduling and timing
	starttime?: string;
	starttimeslot?: number;
	targetdate?: string;
	targettime?: string;
	targettimeslot?: number;
	deadlinedate?: string;
	
	// Source and supplier
	source?: number;
	supplier_status?: number;
	supplier_contract_id?: number;
	
	// Flags and settings
	flagged?: boolean;
	onhold?: boolean;
	excludefromsla?: boolean;
	showforusers?: boolean;
	inactive?: boolean;
	is_vip?: boolean;
	isimportantcontact?: boolean;
	surveysent?: boolean;
	surveyneeded?: boolean;
	knownerror?: boolean;
	development?: boolean;
	reviewed?: boolean;
	
	// Organization
	organisation_id?: number;
	department_id?: number;
	team_department_id?: number;
	top_level_id?: number;
	
	// Workflow and pipeline
	workflow_id?: number;
	workflow_step?: number;
	workflow_seq?: number;
	pipeline_stage_id?: number;
	
	// Release management
	release_id?: number;
	release2_id?: number;
	release3_id?: number;
	release_important?: boolean;
	releasenotegroup_id?: number;
	
	// Change management
	alsoinform?: string;
	backoutplan?: string;
	communicationplan?: string;
	testplan?: string;
	riskdescription?: string;
	risklevel?: number;
	impactdescription?: string;
	changeinformation_html?: string;
	
	// Appointments and resources
	appointment_type?: number;
	resourcetype_id?: number;
	resource_booking_type?: number;
	
	// Project and billing
	projectinternaltask?: boolean;
	isbillable?: boolean;
	itemsarebillable?: boolean;
	actisbillabledefault?: boolean;
	invoiceseperatelyoverride?: boolean;
	purchaseordernumber?: string;
	budgettype_id?: number;
	
	// Integration fields
	component_id?: number;
	version_id?: number;
	contract_id?: number;
	
	// External system integration
	pagerdutyid?: string;
	servicenow_id?: string;
	connectwise_id?: number;
	autotask_id?: number;
	ninja_alert_id?: string;
	ninja_device_id?: number;
	atera_alert_id?: number;
	
	// Timezone
	site_timezone?: string;
	timezonename?: string;
	section_timezone?: string;
	
	// Various settings
	inform3rdpartysystem?: boolean;
	forwardinboundupdates?: boolean;
	loggedoutofhdworkinghours?: boolean;
	sendprintrequest?: number;
	deadlinenotificationhours?: number;
	showonroadmap?: boolean;
	
	// Address information
	delivery_address?: HaloAddress;
	billing_address?: HaloAddress;
	
	// Tags and labels
	ticket_tags?: string;
	
	// Security and sensitivity
	is_sensitive?: boolean;
	hide_feedback?: boolean;
	
	// Email and messaging
	sms_override?: string;
	
	// ITIL and service management
	itil_requesttype_id?: number;
	
	// Other fields
	guid?: string;
	takenby?: string;
	loggedonbehalfby?: string;
	who?: string;
	article_type?: number;
	phonenumberfrom?: string;
	addressfrom?: string;
}