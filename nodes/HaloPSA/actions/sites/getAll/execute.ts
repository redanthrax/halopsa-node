import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloSiteListResponse } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply filters - mapping of available filters for sites
	if (filters.client_id) qs.client_id = filters.client_id;
	if (filters.inactive !== undefined) qs.inactive = filters.inactive;
	if (filters.includedetails !== undefined) qs.includedetails = filters.includedetails;
	if (filters.order) qs.order = filters.order;
	if (filters.order2) qs.order2 = filters.order2;
	if (filters.order3) qs.order3 = filters.order3;
	if (filters.order4) qs.order4 = filters.order4;
	if (filters.order5) qs.order5 = filters.order5;
	if (filters.orderdesc !== undefined) qs.orderdesc = filters.orderdesc;
	if (filters.orderdesc2 !== undefined) qs.orderdesc2 = filters.orderdesc2;
	if (filters.orderdesc3 !== undefined) qs.orderdesc3 = filters.orderdesc3;
	if (filters.orderdesc4 !== undefined) qs.orderdesc4 = filters.orderdesc4;
	if (filters.orderdesc5 !== undefined) qs.orderdesc5 = filters.orderdesc5;
	if (filters.page_no) qs.page_no = filters.page_no;
	if (filters.page_size) qs.page_size = filters.page_size;
	if (filters.pageinate !== undefined) qs.pageinate = filters.pageinate;
	if (filters.search) qs.search = filters.search;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Site';
	const body = {} as IDataObject;

	let responseData: HaloSiteListResponse;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	// Return the sites array from the response
	return this.helpers.returnJsonArray(responseData.sites as any[] || []);
}