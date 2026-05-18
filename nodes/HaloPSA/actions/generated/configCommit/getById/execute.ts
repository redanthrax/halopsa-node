import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const configCommitId = this.getNodeParameter('configCommitId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ConfigCommit/${configCommitId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
