import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const groupId = this.getNodeParameter('groupId', index) as number;
	const includeDetails = this.getNodeParameter('includeDetails', index, false) as boolean;
	const qs: Record<string, boolean> = {};
	if (includeDetails) qs.includedetails = true;
	const response = await apiRequest.call(this, 'GET', `/ReleaseNoteGroup/${groupId}`, {}, qs);
	return [{ json: response, pairedItem: { item: index } }];
}
