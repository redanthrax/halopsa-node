import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qualificationId = this.getNodeParameter('qualificationId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Qualification/${qualificationId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: qualificationId }, pairedItem: { item: index } }];
}
