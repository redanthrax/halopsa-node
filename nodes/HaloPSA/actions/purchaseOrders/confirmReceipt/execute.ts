import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const response = await apiRequest.call(
		this,
		'POST',
		'/PurchaseOrder/confirmreceipt',
		additionalFields,
		{},
	);

	return [{ json: response as IDataObject, pairedItem: { item: index } }];
}
