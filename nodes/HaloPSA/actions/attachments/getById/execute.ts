import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const attachmentId = this.getNodeParameter('attachmentId', index) as number;
	const includeDetails = this.getNodeParameter('includeDetails', index, false) as boolean;

	const qs: IDataObject = {};
	if (includeDetails) {
		qs.includedetails = true;
	}

	const response = await apiRequest.call(this, 'GET', `/Attachment/${attachmentId}`, {}, qs);

	const json: IDataObject =
		typeof response === 'string' || Buffer.isBuffer(response)
			? { id: attachmentId, data: response.toString() }
			: (response as IDataObject);

	return [{
		json,
		pairedItem: { item: index },
	}];
}
