import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const callScriptId = this.getNodeParameter('callScriptId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/CallScript/${callScriptId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: callScriptId }, pairedItem: { item: index } }];
}
