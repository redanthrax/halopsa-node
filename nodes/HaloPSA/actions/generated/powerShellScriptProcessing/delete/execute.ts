import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const powerShellScriptProcessingId = this.getNodeParameter('powerShellScriptProcessingId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/PowerShellScriptProcessing/${powerShellScriptProcessingId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: powerShellScriptProcessingId }, pairedItem: { item: index } }];
}
