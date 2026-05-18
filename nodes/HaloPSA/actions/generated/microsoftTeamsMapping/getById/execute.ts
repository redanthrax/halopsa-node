import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const microsoftTeamsMappingId = this.getNodeParameter('microsoftTeamsMappingId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/MicrosoftTeamsMapping/${microsoftTeamsMappingId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
