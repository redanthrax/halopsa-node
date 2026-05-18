import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const eracentDetailId = this.getNodeParameter('eracentDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/EracentDetails/${eracentDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: eracentDetailId }, pairedItem: { item: index } }];
}
