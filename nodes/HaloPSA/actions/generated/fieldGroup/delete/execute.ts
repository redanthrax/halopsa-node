import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const fieldGroupId = this.getNodeParameter('fieldGroupId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/FieldGroup/${fieldGroupId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: fieldGroupId }, pairedItem: { item: index } }];
}
