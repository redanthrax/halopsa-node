import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const integrationRunbookVariableGroupId = this.getNodeParameter('integrationRunbookVariableGroupId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/IntegrationRunbookVariableGroup/${integrationRunbookVariableGroupId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
