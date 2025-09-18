import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const webhookId = this.getNodeParameter('webhook_id', index) as string;
	const testMode = this.getNodeParameter('testMode', index, false) as boolean;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;
	
	// Build the payload array based on the HaloPSA webhook execution format
	const payload: IDataObject[] = [{
		id: webhookId,
		_test: testMode,
		...additionalOptions,
	}];

	try {
		const response = await apiRequest.call(this, 'POST', '/Webhook', payload);
		
		return [{
			json: response,
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw error;
	}
}