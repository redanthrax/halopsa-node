import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTicketType } from '../../Interfaces';

export async function getById(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketTypeId = this.getNodeParameter('ticketTypeId', index) as number;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply additional options
	if (additionalOptions.can_create_only !== undefined) qs.can_create_only = additionalOptions.can_create_only;
	if (additionalOptions.can_edit_only !== undefined) qs.can_edit_only = additionalOptions.can_edit_only;
	if (additionalOptions.debug !== undefined) qs.debug = additionalOptions.debug;
	if (additionalOptions.includeconfig !== undefined) qs.includeconfig = additionalOptions.includeconfig;
	if (additionalOptions.includedetails !== undefined) qs.includedetails = additionalOptions.includedetails;
	if (additionalOptions.includekbinfo !== undefined) qs.includekbinfo = additionalOptions.includekbinfo;
	if (additionalOptions.includeteamrestrictions !== undefined) qs.includeteamrestrictions = additionalOptions.includeteamrestrictions;
	if (additionalOptions.isdetailscreen !== undefined) qs.isdetailscreen = additionalOptions.isdetailscreen;
	if (additionalOptions.isnewticket !== undefined) qs.isnewticket = additionalOptions.isnewticket;
	if (additionalOptions.survey_fields !== undefined) qs.survey_fields = additionalOptions.survey_fields;
	if (additionalOptions.ticket_id) qs.ticket_id = additionalOptions.ticket_id;

	const requestMethod = 'GET';
	const endpoint = `/TicketType/${ticketTypeId}`;
	const body = {} as IDataObject;

	const responseData: HaloTicketType = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray([responseData]);
}