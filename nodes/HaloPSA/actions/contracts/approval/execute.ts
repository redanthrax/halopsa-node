import { GenericValue, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { nodeApiError } from '../../../errors';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const approvals = this.getNodeParameter('approvals', index) as string;
	let parsed: unknown;
	try {
		parsed = JSON.parse(approvals);
	} catch {
		throw nodeApiError(this, 'Invalid JSON format for approvals');
	}
	const response = await apiRequest.call(this, 'POST', '/ClientContract/Approval', parsed as GenericValue[], {});
	return this.helpers.returnJsonArray(response);
}
