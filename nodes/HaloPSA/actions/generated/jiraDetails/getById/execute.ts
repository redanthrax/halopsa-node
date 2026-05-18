import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const jiraDetailId = this.getNodeParameter('jiraDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/JiraDetails/${jiraDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
