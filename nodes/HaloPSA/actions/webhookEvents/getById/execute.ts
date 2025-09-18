import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const webhookEventId = this.getNodeParameter('webhookEvent_id', index) as string;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply additional options
	if (additionalOptions.includedetails !== undefined) qs.includedetails = additionalOptions.includedetails;

	try {
		const response = await apiRequest.call(this, 'GET', `/WebhookEvent/${webhookEventId}`, {}, qs);

		return [{
			json: response,
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw error;
	}
}