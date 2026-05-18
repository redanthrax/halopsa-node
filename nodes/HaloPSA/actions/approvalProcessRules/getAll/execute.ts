import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const global = this.getNodeParameter('global', index, false) as boolean;
	const processId = this.getNodeParameter('processId', index, 0) as number;
	const stepId = this.getNodeParameter('stepId', index, 0) as number;

	const qs: IDataObject = {};
	if (global) qs.global = global;
	if (processId > 0) qs.process_id = processId;
	if (stepId > 0) qs.step_id = stepId;

	return runGetAllRequest.call(this, index, {
		endpoint: '/ApprovalProcessRule',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
