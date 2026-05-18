import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const cSPConsumptionDataId = this.getNodeParameter('cSPConsumptionDataId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CSPConsumptionData/${cSPConsumptionDataId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
