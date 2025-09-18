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
	
	// Add update fields
	if (updateFields.active !== undefined) body.active = updateFields.active;
	if (updateFields.department_id) body.department_id = updateFields.department_id;
	if (updateFields.emailaddress) body.emailaddress = updateFields.emailaddress;
	if (updateFields.firstname) body.firstname = updateFields.firstname;
	if (updateFields.isadmin !== undefined) body.isadmin = updateFields.isadmin;
	if (updateFields.lastname) body.lastname = updateFields.lastname;
	if (updateFields.loginname) body.loginname = updateFields.loginname;
	if (updateFields.name) body.name = updateFields.name;
	if (updateFields.phonenumber) body.phonenumber = updateFields.phonenumber;
	if (updateFields.team_id) body.team_id = updateFields.team_id;

	const requestMethod = 'POST';
	const endpoint = '/Agent';
	const qs = {} as IDataObject;

	// The API expects an array of agents
	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, [body], qs);

	return this.helpers.returnJsonArray(responseData);
}