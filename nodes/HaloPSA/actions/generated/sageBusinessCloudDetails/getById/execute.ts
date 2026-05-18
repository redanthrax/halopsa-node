import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const sageBusinessCloudDetailId = this.getNodeParameter('sageBusinessCloudDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SageBusinessCloudDetails/${sageBusinessCloudDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
