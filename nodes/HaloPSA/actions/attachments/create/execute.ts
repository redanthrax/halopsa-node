import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index, 0) as number;
	const filename = this.getNodeParameter('filename', index, '') as string;
	const dataBase64 = this.getNodeParameter('dataBase64', index, '') as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body: IDataObject = { ...additionalFields };
	if (ticketId > 0) {
		body.faultid = ticketId;
	}
	if (filename) {
		body.filename = filename;
	}
	if (dataBase64) {
		body.data_base64 = dataBase64;
	}

	const response = await apiRequest.call(this, 'POST', '/Attachment', [body], {});
	const record = Array.isArray(response) ? response[0] : response;

	return [{
		json: record as IDataObject,
		pairedItem: { item: index },
	}];
}
