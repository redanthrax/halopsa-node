import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveFilters } from '../../../filterParameters';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function getAll(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const filters = resolveFilters.call(this, index);
	const qs = { ...filters } as IDataObject;

	return runGetAllRequest.call(this, index, {
		endpoint: '/TicketType',
		resourceKey: '',
		qs,
	});
}
