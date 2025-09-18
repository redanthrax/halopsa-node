import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const emailAddress = this.getNodeParameter('emailaddress', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	const body: IDataObject = {
		emailaddress: emailAddress,
		name: name,
	};
	
	// Add additional fields
	if (additionalFields.active !== undefined) body.active = additionalFields.active;
	if (additionalFields.department_id) body.department_id = additionalFields.department_id;
	if (additionalFields.firstname) body.firstname = additionalFields.firstname;
	if (additionalFields.isadmin !== undefined) body.isadmin = additionalFields.isadmin;
	if (additionalFields.lastname) body.lastname = additionalFields.lastname;
	if (additionalFields.loginname) body.loginname = additionalFields.loginname;
	if (additionalFields.phonenumber) body.phonenumber = additionalFields.phonenumber;
	if (additionalFields.team_id) body.team_id = additionalFields.team_id;

	const requestMethod = 'POST';
	const endpoint = '/Agent';
	const qs = {} as IDataObject;

	// The API expects an array of agents
	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, [body], qs);

	return this.helpers.returnJsonArray(responseData);
}