import { IDataObject } from 'n8n-workflow';

export type HaloTicketStatusesListResponse = HaloTicketStatus[];

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

export interface HaloTicketStatusDetailed extends HaloTicketStatus {
	notifystatuschange?: number;
	dontsendslareminders?: boolean;
	slaignorerelease?: boolean;
}

export interface HaloTicketStatusCreate extends IDataObject {
	name: string;
	
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

export interface HaloTicketStatusUpdate extends Partial<HaloTicketStatusCreate> {
	id?: number;
}