import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveOptions } from '../../../filterParameters';
import { apiRequest } from '../../../transport';
import { HaloTicketStatusDetailed } from '../../Interfaces';

export async function getById(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const statusId = this.getNodeParameter('statusId', index) as number;
	const qs = resolveOptions.call(this, index) as IDataObject;

	const responseData: HaloTicketStatusDetailed = await apiRequest.call(
		this,
		'GET',
		`/Status/${statusId}`,
		{},
		qs,
	);

	return this.helpers.returnJsonArray([responseData]);
}
