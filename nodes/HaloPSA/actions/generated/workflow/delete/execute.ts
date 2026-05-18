import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const workflowId = this.getNodeParameter('workflowId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Workflow/${workflowId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: workflowId }, pairedItem: { item: index } }];
}
