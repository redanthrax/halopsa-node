import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const cSPConsumptionDataId = this.getNodeParameter('cSPConsumptionDataId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/CSPConsumptionData/${cSPConsumptionDataId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: cSPConsumptionDataId }, pairedItem: { item: index } }];
}
