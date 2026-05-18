import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const powerShellScriptId = this.getNodeParameter('powerShellScriptId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/PowerShellScript/${powerShellScriptId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
