import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const dynatraceDetailId = this.getNodeParameter('dynatraceDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/DynatraceDetails/${dynatraceDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
