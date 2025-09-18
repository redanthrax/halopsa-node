import { IDataObject } from 'n8n-workflow';

// Common address interface used by tickets and other resources
export interface HaloAddress extends IDataObject {
	id?: number;
	line1?: string;
	line2?: string;
	line3?: string;
	line4?: string;
	postcode?: string;
}

// Common priority interface used by tickets
export interface HaloPriority extends IDataObject {
	id?: string;
	slaid?: number;
	priorityid?: number;
	name?: string;
	fixtime?: number;
	fixunits?: string;
	enterslaexcuse?: boolean;
	responsetime?: number;
	responseunits?: string;
	ishidden?: boolean;
	fixendofday?: boolean;
	responseendofday?: boolean;
	colour?: string;
	workdaysoverride?: number;
	responsestartofday?: boolean;
	responsestartofdaytime?: string;
	startofday?: boolean;
	startofdaytime?: string;
	setfixtostartdate?: boolean;
	setfixtotargetdate?: boolean;
}
