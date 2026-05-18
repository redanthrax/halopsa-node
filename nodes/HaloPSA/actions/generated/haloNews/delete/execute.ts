import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const haloNewId = this.getNodeParameter('haloNewId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/HaloNews/${haloNewId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: haloNewId }, pairedItem: { item: index } }];
}
