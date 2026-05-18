import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const chargeRateId = this.getNodeParameter('chargeRateId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ChargeRate/${chargeRateId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
