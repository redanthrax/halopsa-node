import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const versionInfoId = this.getNodeParameter('versionInfoId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/VersionInfo/${versionInfoId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
