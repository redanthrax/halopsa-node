import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	if (filters) {
		Object.assign(qs, filters);
		
		if (filters.include_custom_fields && Array.isArray(filters.include_custom_fields)) {
			qs.include_custom_fields = filters.include_custom_fields.join(',');
		}
	}

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Asset';
	const body = {} as IDataObject;

if (returnAll) {
	const all = await apiRequestAllItems.call(this, requestMethod, endpoint, 'assets', body, qs);
	return this.helpers.returnJsonArray(all);
}

let responseData: any;
responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

return this.helpers.returnJsonArray(responseData.assets || responseData || []);
}