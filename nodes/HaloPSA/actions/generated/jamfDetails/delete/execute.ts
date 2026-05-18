import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const jamfDetailId = this.getNodeParameter('jamfDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/JamfDetails/${jamfDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: jamfDetailId }, pairedItem: { item: index } }];
}
