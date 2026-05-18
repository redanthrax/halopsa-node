import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	return runGetAllRequest.call(this, index, {
		endpoint: '/CostCentres',
		resourceKey: '',
		qs: {},
		maxLimit: 100,
	});
}
