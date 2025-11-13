import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('id', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	
	const body: IDataObject = {
		id: agentId,
	};
	
	if (updateFields.isdisabled !== undefined) body.isdisabled = updateFields.isdisabled;
	if (updateFields.department_id) {
		const v = updateFields.department_id;
		body.department_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (updateFields.email) body.email = updateFields.email;
	if (updateFields.firstname) body.firstname = updateFields.firstname;
	if (updateFields.isadmin !== undefined) body.isadmin = updateFields.isadmin;
	if (updateFields.surname) body.surname = updateFields.surname;
	if (updateFields.loginname) body.loginname = updateFields.loginname;
	if (updateFields.name) body.name = updateFields.name;
	if (updateFields.sms) body.sms = updateFields.sms;
	if (updateFields.team_id) {
		const v = updateFields.team_id;
		body.team_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}

	const requestMethod = 'POST';
	const endpoint = '/Agent';
	const qs = {} as IDataObject;

	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, [body], qs);

	return this.helpers.returnJsonArray(responseData);
}