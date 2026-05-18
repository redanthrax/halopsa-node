import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const teamId = this.getNodeParameter('teamId', index) as number;
	const includeAgents = this.getNodeParameter('includeAgents', index, false) as boolean;
	const includeDetails = this.getNodeParameter('includeDetails', index, false) as boolean;

	const qs: Record<string, boolean> = {};
	if (includeAgents) qs.includeagents = true;
	if (includeDetails) qs.includedetails = true;

	const response = await apiRequest.call(this, 'GET', `/Team/${teamId}`, {}, qs);

	return [{ json: response, pairedItem: { item: index } }];
}
