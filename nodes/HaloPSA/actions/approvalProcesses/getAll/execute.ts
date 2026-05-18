import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const accessControlLevel = this.getNodeParameter('accessControlLevel', index, 0) as number;
	const qs: IDataObject = {};
	if (accessControlLevel > 0) qs.access_control_level = accessControlLevel;

	return runGetAllRequest.call(this, index, {
		endpoint: '/ApprovalProcess',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
