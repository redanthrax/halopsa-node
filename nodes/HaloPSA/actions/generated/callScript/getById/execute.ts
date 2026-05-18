import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const callScriptId = this.getNodeParameter('callScriptId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CallScript/${callScriptId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
