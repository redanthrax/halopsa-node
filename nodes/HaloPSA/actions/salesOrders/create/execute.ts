import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const clientId = this.getNodeParameter('clientId', index, 0) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = { ...additionalFields };
	if (clientId > 0) {
		body.client_id = clientId;
	}

	const response = await apiRequest.call(this, 'POST', '/SalesOrder', [body], {});
	const record = Array.isArray(response) ? response[0] : response;

	return [{ json: record as IDataObject, pairedItem: { item: index } }];
}
