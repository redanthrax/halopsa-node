import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloSiteResponse } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const siteId = this.getNodeParameter('siteId', index) as number;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	if (additionalOptions.includedetails !== undefined) {
		qs.includedetails = additionalOptions.includedetails;
	}
	
	if (additionalOptions.includeactivity !== undefined) {
		qs.includeactivity = additionalOptions.includeactivity;
	}
	
	if (additionalOptions.client_override !== undefined && additionalOptions.client_override !== 0) {
		qs.client_override = additionalOptions.client_override;
	}
	
	if (additionalOptions.domain !== undefined && additionalOptions.domain !== '') {
		qs.domain = additionalOptions.domain;
	}
	
	if (additionalOptions.issetup !== undefined) {
		qs.issetup = additionalOptions.issetup;
	}
	
	if (additionalOptions.tickettype_id !== undefined && additionalOptions.tickettype_id !== 0) {
		qs.tickettype_id = additionalOptions.tickettype_id;
	}

	const requestMethod = 'GET';
	const endpoint = `/Site/${siteId}`;
	const body = {} as IDataObject;

	const responseData: HaloSiteResponse = await apiRequest.call(
		this, 
		requestMethod, 
		endpoint, 
		body, 
		qs
	);

	return this.helpers.returnJsonArray([responseData as IDataObject]);
}