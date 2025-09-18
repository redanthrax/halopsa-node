import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assettypeId = this.getNodeParameter('assettype_id', index) as number;
	const clientId = this.getNodeParameter('client_id', index) as number;
	const siteId = this.getNodeParameter('site_id', index) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	const body: IDataObject = {
		assettype_id: assettypeId,
		client_id: clientId,
		site_id: siteId,
	};
	
	// Add additional fields
	if (additionalFields.business_owner_id) body.business_owner_id = additionalFields.business_owner_id;
	if (additionalFields.contract_id !== undefined) body.contract_id = additionalFields.contract_id;
	if (additionalFields.contract_ref) body.contract_ref = additionalFields.contract_ref;
	if (additionalFields.criticality) body.criticality = additionalFields.criticality;
	if (additionalFields.device_number) body.device_number = additionalFields.device_number;
	if (additionalFields.inactive !== undefined) body.inactive = additionalFields.inactive;
	if (additionalFields.inventory_number) body.inventory_number = additionalFields.inventory_number;
	if (additionalFields.is_template !== undefined) body.is_template = additionalFields.is_template;
	if (additionalFields.item_id) body.item_id = additionalFields.item_id;
	if (additionalFields.key_field) body.key_field = additionalFields.key_field;
	if (additionalFields.key_field2) body.key_field2 = additionalFields.key_field2;
	if (additionalFields.key_field3) body.key_field3 = additionalFields.key_field3;
	if (additionalFields.notes) body.notes = additionalFields.notes;
	if (additionalFields.priority_id) body.priority_id = additionalFields.priority_id;
	if (additionalFields.sla_id !== undefined) body.sla_id = additionalFields.sla_id;
	if (additionalFields.status_id) body.status_id = additionalFields.status_id;
	if (additionalFields.supplier_contract_id) body.supplier_contract_id = additionalFields.supplier_contract_id;
	if (additionalFields.supplier_id) body.supplier_id = additionalFields.supplier_id;
	if (additionalFields.technical_owner_id) body.technical_owner_id = additionalFields.technical_owner_id;
	if (additionalFields.third_party_id) body.third_party_id = additionalFields.third_party_id;
	if (additionalFields.use) body.use = additionalFields.use;
	if (additionalFields.user_id) body.user_id = additionalFields.user_id;

	const requestMethod = 'POST';
	const endpoint = '/Asset';
	const qs = {} as IDataObject;

	// The API expects an array of assets
	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, [body], qs);

	return this.helpers.returnJsonArray(responseData);
}