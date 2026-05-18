import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const powerShellScriptCriteriaId = this.getNodeParameter('powerShellScriptCriteriaId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/PowerShellScriptCriteria/${powerShellScriptCriteriaId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
