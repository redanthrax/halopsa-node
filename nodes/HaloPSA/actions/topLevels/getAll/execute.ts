import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const search = this.getNodeParameter('search', index, '') as string;
	const orgId = this.getNodeParameter('orgId', index, 0) as number;
	const showAll = this.getNodeParameter('showAll', index, false) as boolean;
	const includeAgents = this.getNodeParameter('includeAgents', index, false) as boolean;
	const includeTeams = this.getNodeParameter('includeTeams', index, false) as boolean;

	const qs: IDataObject = {};
	if (search) qs.search = search;
	if (orgId > 0) qs.org_id = orgId;
	if (showAll) qs.show_all = showAll;
	if (includeAgents) qs.include_agents = includeAgents;
	if (includeTeams) qs.include_teams = includeTeams;

	return runGetAllRequest.call(this, index, {
		endpoint: '/TopLevel',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
