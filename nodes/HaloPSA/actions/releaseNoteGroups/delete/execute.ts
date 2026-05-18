import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const groupId = this.getNodeParameter('groupId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ReleaseNoteGroup/${groupId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: groupId }, pairedItem: { item: index } }];
}
