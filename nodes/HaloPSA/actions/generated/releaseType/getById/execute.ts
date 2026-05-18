import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const releaseTypeId = this.getNodeParameter('releaseTypeId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ReleaseType/${releaseTypeId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
