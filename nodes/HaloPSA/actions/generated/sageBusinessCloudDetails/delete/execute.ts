import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const sageBusinessCloudDetailId = this.getNodeParameter('sageBusinessCloudDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SageBusinessCloudDetails/${sageBusinessCloudDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: sageBusinessCloudDetailId }, pairedItem: { item: index } }];
}
