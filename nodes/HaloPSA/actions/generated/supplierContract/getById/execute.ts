import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const supplierContractId = this.getNodeParameter('supplierContractId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SupplierContract/${supplierContractId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
