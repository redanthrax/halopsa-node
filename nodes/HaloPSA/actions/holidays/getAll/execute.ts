import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as number;
	const approvedOnly = this.getNodeParameter('approvedOnly', index) as boolean;
	const startDate = this.getNodeParameter('startDate', index) as string;
	const endDate = this.getNodeParameter('endDate', index) as string;

	const qs: IDataObject = {};
	if (agentId > 0) {
		qs.agent_id = agentId;
	}
	if (approvedOnly) {
		qs.approved_only = approvedOnly;
	}
	if (startDate) {
		qs.start_date = startDate;
	}
	if (endDate) {
		qs.end_date = endDate;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/Holiday',
		resourceKey: 'holidays',
		qs,
		maxLimit: 100,
	});
}
