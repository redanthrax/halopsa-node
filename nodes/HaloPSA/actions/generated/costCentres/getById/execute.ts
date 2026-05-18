import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const costCentreId = this.getNodeParameter('costCentreId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CostCentres/${costCentreId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
