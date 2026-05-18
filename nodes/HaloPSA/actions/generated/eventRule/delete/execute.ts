import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const eventRuleId = this.getNodeParameter('eventRuleId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/EventRule/${eventRuleId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: eventRuleId }, pairedItem: { item: index } }];
}
