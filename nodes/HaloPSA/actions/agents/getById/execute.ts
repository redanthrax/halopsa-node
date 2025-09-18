import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentId = this.getNodeParameter('agentId', index) as number;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply additional options
	if (additionalOptions.clientidoverride) qs.clientidoverride = additionalOptions.clientidoverride;
	if (additionalOptions.get_htmldesigner_signature !== undefined) qs.get_htmldesigner_signature = additionalOptions.get_htmldesigner_signature;
	if (additionalOptions.getholidayallowance !== undefined) qs.getholidayallowance = additionalOptions.getholidayallowance;
	if (additionalOptions.includedetails !== undefined) qs.includedetails = additionalOptions.includedetails;
	if (additionalOptions.isagentconfig !== undefined) qs.isagentconfig = additionalOptions.isagentconfig;
	if (additionalOptions.loadcache !== undefined) qs.loadcache = additionalOptions.loadcache;

	try {
		const response = await apiRequest.call(this, 'GET', `/Agent/${agentId}`, {}, qs);

		return [{
			json: response,
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw error;
	}
}