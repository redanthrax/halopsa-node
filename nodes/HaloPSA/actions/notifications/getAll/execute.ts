import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as number;
	const restrictToAgentId = this.getNodeParameter('restrictToAgentId', index) as number;
	const showAll = this.getNodeParameter('showAll', index) as boolean;
	const type = this.getNodeParameter('type', index) as number;

	const qs: IDataObject = {};
	if (agentId > 0) {
		qs.agent_id = agentId;
	}
	if (restrictToAgentId > 0) {
		qs.restrictto_agent_id = restrictToAgentId;
	}
	if (showAll) {
		qs.showall = showAll;
	}
	if (type > 0) {
		qs.type = type;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/Notification',
		resourceKey: 'notifications',
		qs,
		maxLimit: 100,
	});
}
