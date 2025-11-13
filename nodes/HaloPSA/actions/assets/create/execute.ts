import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assettypeIdParam = this.getNodeParameter('assettype_id', index);
	const assettypeId = typeof assettypeIdParam === 'string' ? parseInt(assettypeIdParam, 10) : (assettypeIdParam as number);
	const clientIdParam = this.getNodeParameter('client_id', index);
	const clientId = typeof clientIdParam === 'string' ? parseInt(clientIdParam, 10) : (clientIdParam as number);
	const siteIdParam = this.getNodeParameter('site_id', index);
	const siteId = typeof siteIdParam === 'string' ? parseInt(siteIdParam, 10) : (siteIdParam as number);
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	const fieldItems = this.getNodeParameter('fieldItems.fieldItem', index, []) as Array<{
		field: string;
		value: string;
	}>;
	
	const body: IDataObject = {
		assettype_id: assettypeId,
		client_id: clientId,
		site_id: siteId,
	};
	
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
	if (additionalFields.status_id) {
		const statusIdValue = additionalFields.status_id;
		body.status_id = typeof statusIdValue === 'string' ? parseInt(statusIdValue, 10) : statusIdValue;
	}
	if (additionalFields.supplier_contract_id) body.supplier_contract_id = additionalFields.supplier_contract_id;
	if (additionalFields.supplier_id) body.supplier_id = additionalFields.supplier_id;
	if (additionalFields.technical_owner_id) body.technical_owner_id = additionalFields.technical_owner_id;
	if (additionalFields.third_party_id) body.third_party_id = additionalFields.third_party_id;
	if (additionalFields.use) body.use = additionalFields.use;
	if (additionalFields.user_id) {
		const userIdValue = additionalFields.user_id;
		body.user_id = typeof userIdValue === 'string' ? parseInt(userIdValue, 10) : userIdValue;
	}
	
	if (fieldItems && fieldItems.length > 0) {
		const fields: Array<{ id: number; value: string }> = [];
		for (const item of fieldItems) {
			if (item.field && item.value !== undefined) {
				const fieldId = typeof item.field === 'string' ? parseInt(item.field, 10) : item.field;
				fields.push({
					id: fieldId,
					value: item.value,
				});
			}
		}
		if (fields.length > 0) {
			body.fields = fields;
		}
	}

	const requestMethod = 'POST';
	const endpoint = '/Asset';
	const qs = {} as IDataObject;

	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, [body], qs);

	return this.helpers.returnJsonArray(responseData);
}