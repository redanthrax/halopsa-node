import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const keyVaultId = this.getNodeParameter('keyVaultId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/KeyVault/${keyVaultId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
