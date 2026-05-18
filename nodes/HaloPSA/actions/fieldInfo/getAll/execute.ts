import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveFilters } from '../../../filterParameters';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const result = await runGetAllRequest.call(this, index, {
		endpoint: '/FieldInfo',
		resourceKey: '',
		qs: { ...resolveFilters.call(this, index) },
	});

	return result.map((item: INodeExecutionData) => item.json);
}
