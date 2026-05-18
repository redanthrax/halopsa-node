import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const manageEngineDetailId = this.getNodeParameter('manageEngineDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ManageEngineDetails/${manageEngineDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
