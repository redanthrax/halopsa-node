import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const keyVaultId = this.getNodeParameter('keyVaultId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/KeyVault/${keyVaultId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: keyVaultId }, pairedItem: { item: index } }];
}
