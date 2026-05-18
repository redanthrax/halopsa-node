import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const outgoingAttemptId = this.getNodeParameter('outgoingAttemptId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/OutgoingAttempt/${outgoingAttemptId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
