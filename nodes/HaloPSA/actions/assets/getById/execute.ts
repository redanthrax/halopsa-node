import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveOptions } from '../../../filterParameters';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assetId = this.getNodeParameter('id', index) as number;
	const qs = resolveOptions.call(this, index) as IDataObject;

	const responseData = await apiRequest.call(this, 'GET', `/Asset/${assetId}`, {}, qs);

	return this.helpers.returnJsonArray(responseData);
}
