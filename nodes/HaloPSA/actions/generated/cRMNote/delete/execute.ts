import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const cRMNoteId = this.getNodeParameter('cRMNoteId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/CRMNote/${cRMNoteId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: cRMNoteId }, pairedItem: { item: index } }];
}
