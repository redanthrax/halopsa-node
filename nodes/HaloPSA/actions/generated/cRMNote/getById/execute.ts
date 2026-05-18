import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const cRMNoteId = this.getNodeParameter('cRMNoteId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CRMNote/${cRMNoteId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
