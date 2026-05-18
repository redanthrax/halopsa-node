import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const releaseTypeId = this.getNodeParameter('releaseTypeId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ReleaseType/${releaseTypeId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: releaseTypeId }, pairedItem: { item: index } }];
}
