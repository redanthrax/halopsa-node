import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const contractId = this.getNodeParameter('contractId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ClientContract/${contractId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: contractId },
		pairedItem: { item: index },
	}];
}
