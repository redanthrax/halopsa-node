import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ingramMicroResellerDetailId = this.getNodeParameter('ingramMicroResellerDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/IngramMicroResellerDetails/${ingramMicroResellerDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: ingramMicroResellerDetailId }, pairedItem: { item: index } }];
}
