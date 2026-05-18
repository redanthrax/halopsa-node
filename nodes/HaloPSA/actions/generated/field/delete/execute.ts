import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const fieldId = this.getNodeParameter('fieldId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Field/${fieldId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: fieldId }, pairedItem: { item: index } }];
}
