import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const certificateId = this.getNodeParameter('certificateId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Certificate/${certificateId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: certificateId }, pairedItem: { item: index } }];
}
