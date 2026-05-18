import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const workflowTargetId = this.getNodeParameter('workflowTargetId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/WorkflowTarget/${workflowTargetId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: workflowTargetId }, pairedItem: { item: index } }];
}
