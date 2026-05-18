import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveFilters } from '../../../filterParameters';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const filters = resolveFilters.call(this, index);
	const qs: IDataObject = {};

	if (filters.activeonly !== undefined) qs.activeonly = filters.activeonly;
	if (filters.id) qs.id = filters.id;
	if (filters.fieldsandlayoutonly !== undefined) qs.fieldsandlayoutonly = filters.fieldsandlayoutonly;
	if (filters.includetyperestrictions !== undefined) qs.includetyperestrictions = filters.includetyperestrictions;
	if (filters.search) qs.search = filters.search;

	return runGetAllRequest.call(this, index, {
		endpoint: '/AssetType',
		resourceKey: '',
		qs,
	});
}
