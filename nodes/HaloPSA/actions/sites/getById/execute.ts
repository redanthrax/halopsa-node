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
	
	// Apply additional options
	if (additionalOptions.includedetails !== undefined) {
		qs.includedetails = additionalOptions.includedetails;
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

	// Return the site data
	return this.helpers.returnJsonArray([responseData as IDataObject]);
}