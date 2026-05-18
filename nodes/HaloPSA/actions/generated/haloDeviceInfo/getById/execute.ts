import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const haloDeviceInfoId = this.getNodeParameter('haloDeviceInfoId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/HaloDeviceInfo/${haloDeviceInfoId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
