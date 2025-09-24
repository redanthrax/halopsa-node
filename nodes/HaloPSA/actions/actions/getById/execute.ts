import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloActionDetailed } from '../../interfaces/actions';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const actionId = this.getNodeParameter('actionId', index) as number;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	if (additionalOptions.ticket_id) qs.ticket_id = additionalOptions.ticket_id;
	if (additionalOptions.agentonly !== undefined) qs.agentonly = additionalOptions.agentonly;
	if (additionalOptions.emailonly !== undefined) qs.emailonly = additionalOptions.emailonly;
	if (additionalOptions.includedetails !== undefined) qs.includedetails = additionalOptions.includedetails;
	if (additionalOptions.includeemail !== undefined) qs.includeemail = additionalOptions.includeemail;
	if (additionalOptions.mostrecent !== undefined) qs.mostrecent = additionalOptions.mostrecent;
	if (additionalOptions.nonsystem !== undefined) qs.nonsystem = additionalOptions.nonsystem;
	if (additionalOptions.penultimate !== undefined) qs.penultimate = additionalOptions.penultimate;

	const requestMethod = 'GET';
	const endpoint = `/Actions/${actionId}`;
	const body = {} as IDataObject;

	const responseData: HaloActionDetailed = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray([responseData]);
}