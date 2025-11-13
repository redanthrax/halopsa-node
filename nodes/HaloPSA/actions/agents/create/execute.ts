import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	const body: IDataObject = {
		email: email,
		name: name,
	};
	
	if (additionalFields.isdisabled !== undefined) body.isdisabled = additionalFields.isdisabled;
	if (additionalFields.department_id) {
		const v = additionalFields.department_id;
		body.department_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (additionalFields.firstname) body.firstname = additionalFields.firstname;
	if (additionalFields.isadmin !== undefined) body.isadmin = additionalFields.isadmin;
	if (additionalFields.surname) body.surname = additionalFields.surname;
	if (additionalFields.loginname) body.loginname = additionalFields.loginname;
	if (additionalFields.sms) body.sms = additionalFields.sms;
	if (additionalFields.team_id) {
		const v = additionalFields.team_id;
		body.team_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}

	const requestMethod = 'POST';
	const endpoint = '/Agent';
	const qs = {} as IDataObject;

	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, [body], qs);

	return this.helpers.returnJsonArray(responseData);
}