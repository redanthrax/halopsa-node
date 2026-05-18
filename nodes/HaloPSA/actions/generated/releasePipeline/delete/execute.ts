import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const releasePipelineId = this.getNodeParameter('releasePipelineId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ReleasePipeline/${releasePipelineId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: releasePipelineId }, pairedItem: { item: index } }];
}
