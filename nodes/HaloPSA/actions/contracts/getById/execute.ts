import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const contractId = this.getNodeParameter('contractId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ClientContract/${contractId}`, {}, {});

	return [{
		json: response,
		pairedItem: { item: index },
	}];
}
