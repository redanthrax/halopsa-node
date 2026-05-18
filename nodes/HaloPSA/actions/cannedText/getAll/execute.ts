import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as number;
	const teamId = this.getNodeParameter('teamId', index) as number;
	const departmentId = this.getNodeParameter('departmentId', index) as number;
	const groupId = this.getNodeParameter('groupId', index) as number;
	const showAll = this.getNodeParameter('showAll', index) as boolean;
	const ticketOnly = this.getNodeParameter('ticketOnly', index) as boolean;

	const qs: IDataObject = {};
	if (agentId > 0) {
		qs.agent_id = agentId;
	}
	if (teamId > 0) {
		qs.team_id = teamId;
	}
	if (departmentId > 0) {
		qs.department_id = departmentId;
	}
	if (groupId > 0) {
		qs.group_id = groupId;
	}
	if (showAll) {
		qs.showall = showAll;
	}
	if (ticketOnly) {
		qs.ticketonly = ticketOnly;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/CannedText',
		resourceKey: 'cannedtext',
		qs,
		maxLimit: 100,
	});
}
