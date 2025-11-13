import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTimesheet } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	
	const agentId = this.getNodeParameter('agent_id', index, 0);
	if (agentId) {
		body.agent_id = typeof agentId === 'string' ? parseInt(agentId, 10) : agentId;
	}
	if (this.getNodeParameter('date', index, '')) body.date = this.getNodeParameter('date', index);
	
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	if (additionalFields.timesheet_manager !== undefined && additionalFields.timesheet_manager !== '') {
		const v = additionalFields.timesheet_manager as string | number;
		additionalFields.timesheet_manager = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	Object.assign(body, additionalFields);

	const requestMethod = 'POST';
	const endpoint = '/Timesheet';
	
	const requestBody = [body];

	const responseData: HaloTimesheet[] = await apiRequest.call(this, requestMethod, endpoint, requestBody, {});

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}