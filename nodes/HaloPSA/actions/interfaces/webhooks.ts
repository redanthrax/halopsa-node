export interface IWebhookFilters {
	// Core webhook filtering options from swagger
	isazureautomation?: boolean;
	type?: number;
}

export interface IWebhookGetAllOptions {
	returnAll: boolean;
	limit?: number;
	filters?: IWebhookFilters;
}

export interface IWebhookGetByIdOptions {
	webhook_id: string;
	includedetails?: boolean;
}

// WebhookEvent interfaces
export interface IWebhookEventFilters {
	automation_id?: number;
	count?: number;
	idonly?: boolean;
	integrationmethod_id?: number;
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
	webhook_id?: string;
}

export interface IWebhookEventGetAllOptions {
	returnAll: boolean;
	limit?: number;
	filters?: IWebhookEventFilters;
}

export interface IWebhookEventGetByIdOptions {
	webhookevent_id: string;
	includedetails?: boolean;
}

// Detailed webhook event structure
export interface IWebhookEvent {
	guid?: string;
	id?: number;
	name?: string;
	agent_id?: number;
	agent_name?: string;
	type?: number;
	delivery_method?: number;
	sendpushnotification?: boolean;
	sendpushnotificationbrowser?: boolean;
	popupinnotificationpane?: boolean;
	eventno?: number;
	emailtemplate_id?: number;
	emailtemplate_guid?: string;
	user_id?: number;
	user_name?: string;
	email_list?: string;
	slack_id?: number;
	interval?: number;
	useworkinghours?: number;
	restriction_type?: number;
	webhook_id?: string;
	condition_count?: number;
	subscriber_count?: number;
	slack_channel_name?: string;
	teams_id?: number;
	teams_channel_name?: string;
	value1?: number;
	mattermost_channel_name?: string;
	filter_type?: number;
	safe_instances?: number;
}

// Flow detail structures
export interface IWebhookAction {
	id?: number;
	flow_id?: number;
	chatprofile_id?: string;
	start_step?: number;
	end_step?: number;
	action_type?: number;
	action_id?: number;
	action_name?: string;
	action_outcome?: string;
	use_work_hours?: boolean;
	time_limit_action_name?: string;
	automation_action_name?: string;
	automation_runbook_name?: string;
	seq?: number;
	approval_result?: number;
	restricted?: boolean;
	todo_group_name?: string;
	chat_selection_order?: number;
}

export interface IWebhookStepCondition {
	id?: number;
	rule_id?: number;
	qualification_criteria_id?: number;
	fieldname?: string;
	value_type?: string;
	value_type_id?: number;
	value_int?: number;
	value_string?: string;
	partialmatch?: boolean;
	matchseparatedvalues?: boolean;
	tablename?: string;
	type?: number;
	flowsubdetails_criteria_id?: number;
	use?: number;
	chatprofile_id?: string;
	chatprofile_flow_seq?: number;
	timezonestring?: string;
	match_after_start?: boolean;
	match_after_target?: boolean;
}

export interface IWebhookOutputVariable {
	id?: number;
	method_id?: number;
	type?: number;
	data_type?: number;
	key?: string;
	value?: string;
	description?: string;
	value_mappings?: any[];
	extra_process?: number;
	step_id?: number;
	step_seq?: number;
	step_name?: string;
	mapping_type?: number;
}

export interface IWebhookFlowStep {
	fdid?: number;
	step_id?: number;
	flow_id?: number;
	chatprofile_id?: string;
	name?: string;
	isstart?: boolean;
	isend?: boolean;
	islaststep?: boolean;
	stage_number?: number;
	pipeline_stage_id?: number;
	pipeline_stage_name?: string;
	actions?: IWebhookAction[];
	steptype?: number;
	message?: string;
	auto_action?: number;
	auto_action_type?: number;
	auto_action_type_guid?: string;
	input_field_id?: number;
	chat_image_type?: number;
	note?: string;
	newticket_service_id?: number;
	iteration_type?: number;
	iteration_batch_size?: number;
	output_variables?: IWebhookOutputVariable[];
	runbook_variable_mappings?: any[];
	allow_all_statuses?: boolean;
	duration?: number;
	step_conditions?: IWebhookStepCondition[];
}

export interface IWebhookAccessControl {
	id?: number;
	entity?: string;
	entity_id?: number;
	type?: number;
	agent_id?: number;
	user_id?: number;
	role_id?: number;
	team_id?: number;
	department_id?: number;
	level?: number;
	entity_text_id?: string;
}

// Main webhook interface based on actual API responses
export interface IWebhook {
	id?: string; // UUID format
	intent?: string;
	name?: string;
	type?: number;
	url?: string;
	content_type?: string;
	authentication_type?: number;
	method?: number;
	basic_username?: string;
	basic_password?: string;
	certificate_id?: number;
	certificate_name?: string;
	active?: boolean;
	events?: IWebhookEvent[];
	last_status?: number;
	systemuse?: string;
	runbook_start_type?: number;
	inbound_authentication_type?: number;
	authentication_header?: string;
	algorithm?: number;
	digest?: number;
	signature_prefix?: string;
	headers_to_sign?: any[];
	timestamp_verification_header?: string;
	_iszapier?: boolean;
	zapier_type?: number;
	zapier_client_id?: number;
	zapier_site_id?: number;
	zapier_username?: string;
	zapier_tickettype_id?: number;
	zapier_status_id?: number;
	zapier_sla_id?: number;
	zapier_priority_id?: number;
	zapier_team_id?: number;
	zapier_agent_id?: number;
	mappings?: any[];
	custom_payload?: boolean;
	payload_type?: number;
	flow_chart_json?: string;
	library_licence_name?: string;
	icon_base64?: string;
	icon?: string;
	major_version_number?: number;
	minor_version_number?: number;
	patch_version_number?: number;
	version_number?: string;
	note?: string;
	install_popup?: string;
	steps?: IWebhookFlowStep[];
	input_variables?: any[];
	mapping_profiles?: any[];
	standalone_methods?: any[];
	integrations?: any[];
	schedule_id?: number;
	disabled?: boolean;
	use_lightweight_logs?: boolean;
	lastcreated?: string;
	nextcreationdate?: string;
	log_retention_policy_days?: number;
	batch_method?: number;
	batch_delay_seconds?: number;
	batch_limit?: number;
	infinite_loop_threshold?: number;
	notify_on_failure?: boolean;
	safe_instances?: number;
	multiple_execution_mode?: number;
	auto_disable_attempts?: number;
	last_auto_disable_date?: string;
	safe_instance_list?: any[];
	_test?: boolean;
	_test_variables?: any[];
	_test_runbook_variables?: any[];
	_test_output_variables?: any[];
	_test_result?: any;
	_test_step?: any;
	average_steps_executed?: number;
	max_steps_executed?: number;
	average_execution_time?: number;
	max_execution_time?: number;
	run_count_hour?: number;
	run_count_day?: number;
	run_count_week?: number;
	access_control?: IWebhookAccessControl[];
	access_control_level?: number;
	_warning?: string;
}

// Create and Update interfaces
export interface IWebhookCreateData extends Omit<IWebhook, 'id'> {
	name: string; // Required field
}

export interface IWebhookUpdateData extends Partial<IWebhook> {
	id: string; // Required for updates
}

export interface IWebhookEventCreateData {
	webhook_id?: string;
	integration_method_id?: number;
	integation_method_name?: string;
	notification_id?: number;
	timestamp?: string;
	status?: number;
	error?: string;
	response_body?: string;
	response_headers?: string;
	request_body?: string;
	request_headers?: string;
	processing_time?: number;
}

export interface IWebhookEventUpdateData extends Partial<IWebhookEventCreateData> {
	id: string; // Required for updates
}