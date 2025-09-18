import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assetId = this.getNodeParameter('id', index) as number;
	const options = this.getNodeParameter('options', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply options
	if (options.assettype_id) qs.assettype_id = options.assettype_id;
	if (options.includeactivity !== undefined) qs.includeactivity = options.includeactivity;
	if (options.includeallowedstatus !== undefined) qs.includeallowedstatus = options.includeallowedstatus;
	if (options.includedetails !== undefined) qs.includedetails = options.includedetails;
	if (options.includediagramdetails !== undefined) qs.includediagramdetails = options.includediagramdetails;
	if (options.includehierarchy !== undefined) qs.includehierarchy = options.includehierarchy;

	const requestMethod = 'GET';
	const endpoint = `/Asset/${assetId}`;
	const body = {} as IDataObject;

	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}