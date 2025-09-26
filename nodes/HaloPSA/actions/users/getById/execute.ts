import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as number;
	const options = this.getNodeParameter('options', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	if (options.client_id) qs.client_id = options.client_id;
	if (options.client_override) qs.client_override = options.client_override;
	if (options.domain) qs.domain = options.domain;
	if (options.includeactivity !== undefined) qs.includeactivity = options.includeactivity;
	if (options.includebillinginfo !== undefined) qs.includebillinginfo = options.includebillinginfo;
	if (options.includedetails !== undefined) qs.includedetails = options.includedetails;
	if (options.includepopups !== undefined) qs.includepopups = options.includepopups;
	if (options.includeusersassets !== undefined) qs.includeusersassets = options.includeusersassets;
	if (options.issetup !== undefined) qs.issetup = options.issetup;
	if (options.opp_id) qs.opp_id = options.opp_id;
	if (options.site_id) qs.site_id = options.site_id;
	if (options.site_override) qs.site_override = options.site_override;
	if (options.supplier_id) qs.supplier_id = options.supplier_id;
	if (options.tickettype_id) qs.tickettype_id = options.tickettype_id;
	if (options.username) qs.username = options.username;

	try {
		const response = await apiRequest.call(this, 'GET', `/Users/${id}`, {}, qs);
		
		return [{
			json: response,
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw error;
	}
}