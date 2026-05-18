import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const organisationId = this.getNodeParameter('organisationId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Organisation/${organisationId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: organisationId }, pairedItem: { item: index } }];
}
