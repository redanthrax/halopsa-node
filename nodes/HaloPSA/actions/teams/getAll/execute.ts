import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const departmentId = this.getNodeParameter('departmentId', index, 0) as number;
	const teamType = this.getNodeParameter('teamType', index, '') as string;
	const teamIds = this.getNodeParameter('teamIds', index, '') as string;
	const showAll = this.getNodeParameter('showAll', index, false) as boolean;
	const memberOnly = this.getNodeParameter('memberOnly', index, false) as boolean;
	const myTeamsOnly = this.getNodeParameter('myTeamsOnly', index, false) as boolean;
	const canEditOnly = this.getNodeParameter('canEditOnly', index, false) as boolean;
	const showCounts = this.getNodeParameter('showCounts', index, false) as boolean;

	const qs: IDataObject = {};
	if (departmentId > 0) qs.department_id = departmentId;
	if (teamType) qs.type = teamType;
	if (teamIds) qs.ids = teamIds;
	if (showAll) qs.showall = showAll;
	if (memberOnly) qs.memberonly = memberOnly;
	if (myTeamsOnly) qs.myteamsonly = myTeamsOnly;
	if (canEditOnly) qs.can_edit_only = canEditOnly;
	if (showCounts) qs.showcounts = showCounts;

	return runGetAllRequest.call(this, index, {
		endpoint: '/Team',
		resourceKey: '',
		qs,
		maxLimit: 100,
	});
}
