import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index, 0) as number;
	const startDate = this.getNodeParameter('startDate', index, '') as string;
	const endDate = this.getNodeParameter('endDate', index, '') as string;

	const qs: IDataObject = {};
	if (agentId > 0) {
		qs.agents = String(agentId);
	}
	if (startDate) {
		qs.start_date = startDate;
	}
	if (endDate) {
		qs.end_date = endDate;
	}

	return runGetAllRequest.call(this, index, {
		endpoint: '/Appointment',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
