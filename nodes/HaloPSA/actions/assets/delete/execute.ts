import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assetId = this.getNodeParameter('id', index) as number;

	const requestMethod = 'DELETE';
	const endpoint = `/Asset/${assetId}`;
	const body = {} as IDataObject;
	const qs = {} as IDataObject;

	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData || [{ success: true, id: assetId }]);
}