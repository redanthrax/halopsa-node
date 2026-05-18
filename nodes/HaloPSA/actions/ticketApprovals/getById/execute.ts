import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const approvalId = this.getNodeParameter('approvalId', index) as number;
	const includeDetails = this.getNodeParameter('includeDetails', index, false) as boolean;

	const qs: IDataObject = {};
	if (includeDetails) {
		qs.includedetails = true;
	}

	const response = await apiRequest.call(this, 'GET', `/TicketApproval/${approvalId}`, {}, qs);

	return [{ json: response as IDataObject, pairedItem: { item: index } }];
}
