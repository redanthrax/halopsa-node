import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assetId = this.getNodeParameter('id', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	
	const body: IDataObject = {
		id: assetId,
	};
	
	// Add update fields
	if (updateFields.assettype_id) body.assettype_id = updateFields.assettype_id;
	if (updateFields.business_owner_id) body.business_owner_id = updateFields.business_owner_id;
	if (updateFields.client_id) body.client_id = updateFields.client_id;
	if (updateFields.contract_id !== undefined) body.contract_id = updateFields.contract_id;
	if (updateFields.contract_ref) body.contract_ref = updateFields.contract_ref;
	if (updateFields.criticality) body.criticality = updateFields.criticality;
	if (updateFields.device_number) body.device_number = updateFields.device_number;
	if (updateFields.inactive !== undefined) body.inactive = updateFields.inactive;
	if (updateFields.inventory_number) body.inventory_number = updateFields.inventory_number;
	if (updateFields.is_template !== undefined) body.is_template = updateFields.is_template;
	if (updateFields.item_id) body.item_id = updateFields.item_id;
	if (updateFields.key_field) body.key_field = updateFields.key_field;
	if (updateFields.key_field2) body.key_field2 = updateFields.key_field2;
	if (updateFields.key_field3) body.key_field3 = updateFields.key_field3;
	if (updateFields.notes) body.notes = updateFields.notes;
	if (updateFields.priority_id) body.priority_id = updateFields.priority_id;
	if (updateFields.site_id) body.site_id = updateFields.site_id;
	if (updateFields.sla_id !== undefined) body.sla_id = updateFields.sla_id;
	if (updateFields.status_id) body.status_id = updateFields.status_id;
	if (updateFields.supplier_contract_id) body.supplier_contract_id = updateFields.supplier_contract_id;
	if (updateFields.supplier_id) body.supplier_id = updateFields.supplier_id;
	if (updateFields.technical_owner_id) body.technical_owner_id = updateFields.technical_owner_id;
	if (updateFields.third_party_id) body.third_party_id = updateFields.third_party_id;
	if (updateFields.use) body.use = updateFields.use;
	if (updateFields.user_id) body.user_id = updateFields.user_id;

	const requestMethod = 'POST';
	const endpoint = '/Asset';
	const qs = {} as IDataObject;

	// The API expects an array of assets
	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, [body], qs);

	return this.helpers.returnJsonArray(responseData);
}