import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketTypeId = this.getNodeParameter('ticketTypeId', index, 0) as number;
	const workflowId = this.getNodeParameter('workflowId', index, 0) as number;
	const quickOnly = this.getNodeParameter('quickOnly', index, false) as boolean;
	const showHidden = this.getNodeParameter('showHidden', index, false) as boolean;
	const excludeSystemActions = this.getNodeParameter('excludeSystemActions', index, false) as boolean;

	const qs: IDataObject = {};
	if (ticketTypeId > 0) qs.tickettype_id = ticketTypeId;
	if (workflowId > 0) qs.workflow_id = workflowId;
	if (quickOnly) qs.quick_only = quickOnly;
	if (showHidden) qs.showhidden = showHidden;
	if (excludeSystemActions) qs.excludesystemactions = excludeSystemActions;

	return runGetAllRequest.call(this, index, {
		endpoint: '/Outcome',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
