import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const componentId = this.getNodeParameter('componentId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ProductComponent/${componentId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: componentId }, pairedItem: { item: index } }];
}
