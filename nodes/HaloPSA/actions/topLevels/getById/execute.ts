import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const topLevelId = this.getNodeParameter('topLevelId', index) as number;
	const includeDetails = this.getNodeParameter('includeDetails', index, false) as boolean;
	const includeAgents = this.getNodeParameter('includeAgents', index, false) as boolean;
	const includeTeams = this.getNodeParameter('includeTeams', index, false) as boolean;
	const qs: Record<string, boolean> = {};
	if (includeDetails) qs.includedetails = true;
	if (includeAgents) qs.include_agents = includeAgents;
	if (includeTeams) qs.include_teams = includeTeams;
	const response = await apiRequest.call(this, 'GET', `/TopLevel/${topLevelId}`, {}, qs);
	return [{ json: response, pairedItem: { item: index } }];
}
