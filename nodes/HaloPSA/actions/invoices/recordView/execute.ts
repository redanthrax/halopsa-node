import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const invoiceId = this.getNodeParameter('invoiceId', index) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body = [{ id: invoiceId, ...additionalFields }];
	const response = await apiRequest.call(this, 'POST', '/Invoice/View', body, {});
	const record = Array.isArray(response) ? response[0] : response;

	return [{ json: (record ?? response) as IDataObject, pairedItem: { item: index } }];
}
