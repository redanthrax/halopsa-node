import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const queryParameters = this.getNodeParameter('queryParameters', index, {}) as IDataObject;
	const response = await apiRequest.call(this, 'GET', '/LapSafe/Complete', {}, queryParameters);
	return [{ json: response as IDataObject, pairedItem: { item: index } }];
}
