import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function update(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const ticketStatusId = this.getNodeParameter('ticketStatusId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as {
		name?: string;
		shortname?: string;
		type?: number;
		sequence?: number;
		colour?: string;
		slaaction?: string;
		showonquickchange?: boolean;
		includeinloadbalance?: boolean;
	};

	const body: any = {
		id: parseInt(ticketStatusId, 10),
		...updateFields,
	};

	const responseData = await apiRequest.call(this, 'POST', '/Status', body);

	return this.helpers.returnJsonArray(responseData);
}