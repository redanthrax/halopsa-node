import { IDataObject } from 'n8n-workflow';

// Response structure for /Status endpoint (list) - API returns array directly
export type HaloTicketStatusesListResponse = HaloTicketStatus[];

// Ticket Status structure from API response (summary view from list)
export interface HaloTicketStatus extends IDataObject {
	id: number;
	guid?: string;
	name?: string;
	shortname?: string;
	type?: number;
	sequence?: number;
	colour?: string;
	slaaction?: string;
	showonquickchange?: boolean;
	timeuntilloffhold?: number;
	statuschangeto?: number;
	statuschangetofreq?: number;
	useworkinghours?: number;
	statusemailfreqdays?: number;
	statusemailid?: number;
	statusnochangehours?: number;
	nochangehoursrecurring?: boolean;
	statusnochangehoursmanager?: number;
	statusnochangehoursmanagerrecurring?: boolean;
	statusnochangehourssection?: number;
	statusnochangehourssectionrecurring?: boolean;
	nochangetemplate?: number;
	includeinloadbalance?: boolean;
	useworkinghours_statusnochangehours?: number;
	useworkinghours_statusnochangehourssection?: number;
	useworkinghours_statusnochangehoursmanager?: number;
}

// Detailed ticket status structure for /Status/{id} endpoint
export interface HaloTicketStatusDetailed extends HaloTicketStatus {
	// Additional fields available in detailed view
	notifystatuschange?: number;
	dontsendslareminders?: boolean;
	slaignorerelease?: boolean;
}

// For creating new ticket statuses
export interface HaloTicketStatusCreate extends IDataObject {
	// Core required fields
	name: string;
	
	// Optional core fields
	shortname?: string;
	type?: number;
	sequence?: number;
	colour?: string;
	slaaction?: string;
	showonquickchange?: boolean;
	timeuntilloffhold?: number;
	statuschangeto?: number;
	statuschangetofreq?: number;
	useworkinghours?: number;
	statusemailfreqdays?: number;
	statusemailid?: number;
	statusnochangehours?: number;
	nochangehoursrecurring?: boolean;
	statusnochangehoursmanager?: number;
	statusnochangehoursmanagerrecurring?: boolean;
	statusnochangehourssection?: number;
	statusnochangehourssectionrecurring?: boolean;
	nochangetemplate?: number;
	includeinloadbalance?: boolean;
	notifystatuschange?: number;
	dontsendslareminders?: boolean;
	slaignorerelease?: boolean;
	useworkinghours_statusnochangehours?: number;
	useworkinghours_statusnochangehourssection?: number;
	useworkinghours_statusnochangehoursmanager?: number;
}

// For updating ticket statuses (all fields optional except potentially id)
export interface HaloTicketStatusUpdate extends Partial<HaloTicketStatusCreate> {
	id?: number;
}