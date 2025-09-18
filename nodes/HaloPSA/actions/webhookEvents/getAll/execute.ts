import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply filters based on swagger documentation
	if (filters.automation_id) qs.automation_id = filters.automation_id;
	if (filters.idonly !== undefined) qs.idonly = filters.idonly;
	if (filters.integrationmethod_id) qs.integrationmethod_id = filters.integrationmethod_id;
	if (filters.order) qs.order = filters.order;
	if (filters.order2) qs.order2 = filters.order2;
	if (filters.order3) qs.order3 = filters.order3;
	if (filters.order4) qs.order4 = filters.order4;
	if (filters.order5) qs.order5 = filters.order5;
	if (filters.orderdesc !== undefined) qs.orderdesc = filters.orderdesc;
	if (filters.orderdesc2 !== undefined) qs.orderdesc2 = filters.orderdesc2;
	if (filters.orderdesc3 !== undefined) qs.orderdesc3 = filters.orderdesc3;
	if (filters.orderdesc4 !== undefined) qs.orderdesc4 = filters.orderdesc4;
	if (filters.orderdesc5 !== undefined) qs.orderdesc5 = filters.orderdesc5;
	if (filters.page_no) qs.page_no = filters.page_no;
	if (filters.page_size) qs.page_size = filters.page_size;
	if (filters.pageinate !== undefined) qs.pageinate = filters.pageinate;
	if (filters.webhook_id) qs.webhook_id = filters.webhook_id;

	// Handle pagination
	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index) as number;
		qs.count = limit;
	}

	try {
		const response = await apiRequest.call(this, 'GET', '/WebhookEvent', {}, qs);
		// Response is directly an array of webhook events
		const webhookEvents = Array.isArray(response) ? response : [];

		return webhookEvents.map((webhookEvent: any) => ({
			json: webhookEvent,
			pairedItem: { item: index },
		}));
	} catch (error) {
		throw error;
	}
}