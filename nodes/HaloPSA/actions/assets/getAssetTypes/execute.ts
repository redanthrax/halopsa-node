import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveFilters } from '../../../filterParameters';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = resolveFilters.call(this, index);
	
	const qs = {} as IDataObject;
	
	if (filters.activeonly !== undefined) qs.activeonly = filters.activeonly;
	if (filters.id) qs.id = filters.id;
	if (filters.fieldsandlayoutonly !== undefined) qs.fieldsandlayoutonly = filters.fieldsandlayoutonly;
	if (filters.includetyperestrictions !== undefined) qs.includetyperestrictions = filters.includetyperestrictions;
	if (filters.search) qs.search = filters.search;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/AssetType';
	const body = {} as IDataObject;

	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (Array.isArray(responseData)) {
		return this.helpers.returnJsonArray(responseData);
	}

	return this.helpers.returnJsonArray([]);
}
