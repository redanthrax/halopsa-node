import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketRuleId = this.getNodeParameter('ticketRuleId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TicketRules/${ticketRuleId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: ticketRuleId }, pairedItem: { item: index } }];
}
