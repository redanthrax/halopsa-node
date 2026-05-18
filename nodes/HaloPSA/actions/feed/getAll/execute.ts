import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const clientId = this.getNodeParameter('clientId', index, 0) as number;
	const siteId = this.getNodeParameter('siteId', index, 0) as number;
	const userId = this.getNodeParameter('userId', index, 0) as number;
	const ticketId = this.getNodeParameter('ticketId', index, 0) as number;
	const assetId = this.getNodeParameter('assetId', index, 0) as number;
	const agentOnly = this.getNodeParameter('agentOnly', index, false) as boolean;
	const followedOnly = this.getNodeParameter('followedOnly', index, false) as boolean;
	const excludePrivate = this.getNodeParameter('excludePrivate', index, false) as boolean;
	const count = this.getNodeParameter('count', index, 0) as number;

	const qs: IDataObject = {};
	if (clientId > 0) qs.related_client_id = clientId;
	if (siteId > 0) qs.related_site_id = siteId;
	if (userId > 0) qs.related_user_id = userId;
	if (ticketId > 0) qs.one_agents_tickets_id = ticketId;
	if (assetId > 0) qs.related_asset_id = assetId;
	if (agentOnly) qs.agent_only = agentOnly;
	if (followedOnly) qs.followed_only = followedOnly;
	if (excludePrivate) qs.exclude_private = excludePrivate;
	if (count > 0) qs.count = count;

	return runGetAllRequest.call(this, index, {
		endpoint: '/Feed',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
