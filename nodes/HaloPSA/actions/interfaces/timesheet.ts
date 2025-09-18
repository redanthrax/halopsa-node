import { IDataObject } from 'n8n-workflow';

// Timesheet Approval Status enum
export enum TimeSheetApprovalStatus {
	Pending = 0,
	Approved = 1,
	Rejected = 2
}

// Timesheet Approval interface
export interface HaloTimesheetApproval extends IDataObject {
	id: number;
	tsid?: number;
	unum?: number;
	approvalstatus?: TimeSheetApprovalStatus;
	approvedby?: number;
	submissiondate?: string;
	approver?: number;
	message?: string;
	_warning?: string;
}

// Key-Value pair interface for agents
export interface HaloKeyPair extends IDataObject {
	key?: string;
	value?: string;
}

// TimesheetEvent interface
export interface HaloTimesheetEvent extends IDataObject {
	id: number;
	event_type?: number;
	subject?: string;
	start_date?: string;
	end_date?: string;
	timetaken?: number;
	agent_id?: number;
	break_type?: number;
	break_note?: string;
	ticket_id?: number;
	action_number?: number;
	action_invoice_number?: number;
	note?: string;
	customer?: string;
	holiday_id?: number;
	charge_type_colour?: string;
	site_id?: number;
	user_name?: string;
	charge_rate?: number;
	mileage?: number;
	tickettype_id?: number;
	lognewticket?: boolean;
	client_id?: number;
	category1?: string;
	category2?: string;
	category3?: string;
	category4?: string;
	contract_id?: number;
	agents?: HaloKeyPair[];
	clear_end?: boolean;
	traveltime?: number;
	originalstartdate?: string;
	_warning?: string;
	charge_type_name?: string;
}

// Timesheet interface based on actual API response
export interface HaloTimesheet extends IDataObject {
	id: number;
	agent_id?: number;
	agent_name?: string;
	colour?: string;
	date?: string;
	start_time?: string;
	end_time?: string;
	estimated_start_time?: string;
	estimated_end_time?: string;
	target_hours?: number;
	actual_hours?: number;
	break_hours?: number;
	unlogged_hours?: number;
	allowed_break_hours?: number;
	work_hours?: number;
	percentage?: number;
	workdayid?: number;
	events?: HaloTimesheetEvent[];
	timesheet_manager?: number;
	forecasting_id?: number;
	_submitapproval?: boolean;
	_approve?: boolean;
	_reject?: boolean;
	approval?: HaloTimesheetApproval;
	_approval_message?: string;
	chargeable_hours?: number;
	forecasting_hours?: number;
}

// Response structures - API returns array directly for Timesheet
export interface HaloTimesheetListResponse extends IDataObject {
	timesheets?: HaloTimesheet[];
	record_count?: number;
}

export interface HaloTimesheetEventListResponse extends IDataObject {
	timesheetevents?: HaloTimesheetEvent[];
	record_count?: number;
}