import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const clientId = this.getNodeParameter('clientId', index, 0) as number;
	const serviceId = this.getNodeParameter('serviceId', index, 0) as number;
	const teamId = this.getNodeParameter('teamId', index, 0) as number;
	const teamName = this.getNodeParameter('teamName', index, '') as string;
	const ticketTypeId = this.getNodeParameter('ticketTypeId', index, 0) as number;
	const typeId = this.getNodeParameter('typeId', index, 0) as number;

	const qs: IDataObject = {};
	if (clientId > 0) qs.client_id = clientId;
	if (serviceId > 0) qs.service_id = serviceId;
	if (teamId > 0) qs.team_id = teamId;
	if (teamName) qs.team_name = teamName;
	if (ticketTypeId > 0) qs.tickettype_id = ticketTypeId;
	if (typeId > 0) qs.type_id = typeId;

	return runGetAllRequest.call(this, index, {
		endpoint: '/Category',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
