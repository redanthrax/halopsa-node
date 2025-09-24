import { IDataObject } from 'n8n-workflow';

export interface HaloActionsListResponse extends IDataObject {
	record_count: number;
	actions: HaloActionSummary[];
}

export interface HaloActionSummary extends IDataObject {
	id: number;
	ticket_id?: number;
	outcome?: string;
	who_type?: number;
	who_imgpath?: string;
	who_agentid?: number;
	who_initials?: string;
	who_colour?: string;
	who_onlinestatus?: number;
	datetime?: string;
	last_updated?: string;
	note?: string;
	replied_to_ticket_id?: number;
	replied_to_action_id?: number;
	created_from_ticket_id?: number;
	created_from_action_id?: number;
	action_contract_id?: number;
	action_contract_ref?: string;
	action_travel_contract_id?: number;
	project_id?: number;
	twitter_id_str?: string;
	twitter_user_name?: string;
	tweet_sent?: boolean;
	personal_unread?: boolean;
	actionarrivaldate?: string;
	actioncompletiondate?: string;
	isjson?: boolean;
	facebook_id?: string;
	facebook_sent?: boolean;
	merged_from_ticketid?: number;
	email_message_id?: string;
	ticket_guid?: string;
	instagram_id?: string;
	instagram_sent?: boolean;
	on_behalf_of?: number;
	on_behalf_of_name?: string;
	actionby_agent_id?: number;
	warning_type?: number;
}

export interface HaloActionDetailed extends HaloActionSummary {
	attachment_list?: any;
	customfields?: IDataObject[];
	reactions?: any[];
	translations?: any[];
	post_translations?: any[];
	whatsapp_id?: string;
	whatsapp_sent?: boolean;
	is_pinned?: boolean;
	pin_order?: number;
	sms_message_id?: string;
	sms_sent?: boolean;
	teams_message_id?: string;
	teams_sent?: boolean;
	slack_message_id?: string;
	slack_sent?: boolean;
	chat_message_id?: string;
	chat_sent?: boolean;
	mattermost_message_id?: string;
	mattermost_sent?: boolean;
	telegram_message_id?: string;
	telegram_sent?: boolean;
	discord_message_id?: string;
	discord_sent?: boolean;
	google_chat_message_id?: string;
	google_chat_sent?: boolean;
}

export interface HaloActionCreate extends IDataObject {
	ticket_id: number;
	note: string;
	
	outcome?: string;
	datetime?: string;
	who_type?: number;
	who_agentid?: number;
	
	replied_to_ticket_id?: number;
	replied_to_action_id?: number;
	created_from_ticket_id?: number;
	created_from_action_id?: number;
	
	action_contract_id?: number;
	action_contract_ref?: string;
	action_travel_contract_id?: number;
	project_id?: number;
	
	twitter_id_str?: string;
	twitter_user_name?: string;
	tweet_sent?: boolean;
	facebook_id?: string;
	facebook_sent?: boolean;
	instagram_id?: string;
	instagram_sent?: boolean;
	
	actionarrivaldate?: string;
	actioncompletiondate?: string;
	
	whatsapp_id?: string;
	whatsapp_sent?: boolean;
	sms_message_id?: string;
	sms_sent?: boolean;
	teams_message_id?: string;
	teams_sent?: boolean;
	slack_message_id?: string;
	slack_sent?: boolean;
	chat_message_id?: string;
	chat_sent?: boolean;
	mattermost_message_id?: string;
	mattermost_sent?: boolean;
	telegram_message_id?: string;
	telegram_sent?: boolean;
	discord_message_id?: string;
	discord_sent?: boolean;
	google_chat_message_id?: string;
	google_chat_sent?: boolean;
	
	isjson?: boolean;
	personal_unread?: boolean;
	merged_from_ticketid?: number;
	email_message_id?: string;
	ticket_guid?: string;
	on_behalf_of?: number;
	on_behalf_of_name?: string;
	actionby_agent_id?: number;
	warning_type?: number;
	is_pinned?: boolean;
	pin_order?: number;
}

export interface HaloActionUpdate extends Partial<HaloActionCreate> {
	id: number;
}