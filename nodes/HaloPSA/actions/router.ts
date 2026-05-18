import { IExecuteFunctions } from 'n8n-workflow';
import {
	IDataObject,
	INodeExecutionData,
} from 'n8n-workflow';

import { HaloPSA } from './Interfaces';
import * as actions from './actions';
import * as agents from './agents';
import * as appointments from './appointments';
import * as approvalProcesses from './approvalProcesses';
import * as approvalProcessRules from './approvalProcessRules';
import * as attachments from './attachments';
import * as categories from './categories';
import * as automations from './automations';
import * as assets from './assets';
import * as client from './client';
import * as cannedText from './cannedText';
import * as contractRules from './contractRules';
import * as contractSchedulePlans from './contractSchedulePlans';
import * as contractSchedules from './contractSchedules';
import * as contracts from './contracts';
import * as customApi from './customApi';
import * as secureSecretLinks from './secureSecretLinks';
import * as topLevels from './topLevels';
import * as knowledgeBase from './knowledgeBase';
import * as notifications from './notifications';
import * as lookups from './lookups';
import * as opportunities from './opportunities';
import * as outcomes from './outcomes';
import * as purchaseOrders from './purchaseOrders';
import * as recurringInvoices from './recurringInvoices';
import * as releases from './releases';
import * as feed from './feed';
import * as fieldInfo from './fieldInfo';
import * as holidays from './holidays';
import * as invoicePayments from './invoicePayments';
import * as invoices from './invoices';
import * as itemCatalog from './items';
import * as productBranches from './productBranches';
import * as productComponents from './productComponents';
import * as projects from './projects';
import * as quotations from './quotations';
import * as raynet from './raynet';
import * as raynetDetails from './raynetDetails';
import * as releaseNoteGroups from './releaseNoteGroups';
import * as salesOrders from './salesOrders';
import * as securityChecks from './securityChecks';
import * as sites from './sites';
import * as suppliers from './suppliers';
import * as surveys from './surveys';
import * as tagResource from './tags';
import * as teams from './teams';
import * as transcriptionStore from './transcriptionStore';
import * as ticketStatuses from './ticketStatuses';
import * as ticketTypes from './ticketTypes';
import * as ticketApprovals from './ticketApprovals';
import * as ticketTodos from './ticketTodos';
import * as todoGroups from './todoGroups';
import * as tickets from './tickets';
import * as timesheet from './timesheet';
import * as timesheetEvent from './timesheetEvent';
import * as users from './users';
import * as webhooks from './webhooks';
import * as webhookEvents from './webhookEvents';
import * as reporting from '../reporting';
import { generatedResourceHandlers } from './generated/registry';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<HaloPSA>('resource', i);
		const operation = this.getNodeParameter('operation', i);

		const haloPSA = {
			resource,
			operation,
		} as HaloPSA;

		try {
		switch (haloPSA.resource) {
			case 'actions':
				responseData = await (actions as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'agents':
				responseData = await (agents as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'appointments':
				responseData = await (appointments as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'approvalProcesses':
				responseData = await (approvalProcesses as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'approvalProcessRules':
				responseData = await (approvalProcessRules as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'assets':
				responseData = await (assets as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'attachments':
				responseData = await (attachments as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'automations':
				responseData = await (automations as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'cannedText':
				responseData = await (cannedText as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'categories':
				responseData = await (categories as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'client':
				responseData = await (client as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'contracts':
				responseData = await (contracts as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'contractRules':
				responseData = await (contractRules as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'contractSchedules':
				responseData = await (contractSchedules as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'contractSchedulePlans':
				responseData = await (contractSchedulePlans as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'customApi':
				responseData = await (customApi as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'notifications':
				responseData = await (notifications as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'knowledgeBase':
				responseData = await (knowledgeBase as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'lookups':
				responseData = await (lookups as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'opportunities':
				responseData = await (opportunities as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'outcomes':
				responseData = await (outcomes as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'purchaseOrders':
				responseData = await (purchaseOrders as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'recurringInvoices':
				responseData = await (recurringInvoices as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'releases':
				responseData = await (releases as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'releaseNoteGroups':
				responseData = await (releaseNoteGroups as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'feed':
				responseData = await (feed as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'fieldInfo':
				responseData = await (fieldInfo as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'holidays':
				responseData = await (holidays as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'invoicePayments':
				responseData = await (invoicePayments as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'invoices':
				responseData = await (invoices as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'items':
				responseData = await (itemCatalog as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'productBranches':
				responseData = await (productBranches as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'productComponents':
				responseData = await (productComponents as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'projects':
				responseData = await (projects as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'quotations':
				responseData = await (quotations as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'raynet':
				responseData = await (raynet as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'raynetDetails':
				responseData = await (raynetDetails as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'salesOrders':
				responseData = await (salesOrders as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'secureSecretLinks':
				responseData = await (secureSecretLinks as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'securityChecks':
				responseData = await (securityChecks as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'sites':
				responseData = await (sites as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'suppliers':
				responseData = await (suppliers as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'surveys':
				responseData = await (surveys as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'tags':
				responseData = await (tagResource as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'teams':
				responseData = await (teams as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'transcriptionStore':
				responseData = await (transcriptionStore as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'topLevels':
				responseData = await (topLevels as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'ticketApprovals':
				responseData = await (ticketApprovals as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'ticketTodos':
				responseData = await (ticketTodos as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'todoGroups':
				responseData = await (todoGroups as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'tickets':
				responseData = await (tickets as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'ticketStatuses':
				responseData = await (ticketStatuses as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'ticketTypes':
				responseData = await (ticketTypes as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'timesheet':
				responseData = await (timesheet as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'timesheetEvent':
				responseData = await (timesheetEvent as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'users':
				responseData = await (users as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'webhooks':
				responseData = await (webhooks as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'webhookEvents':
				responseData = await (webhookEvents as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'reporting':
				responseData = await (reporting as any)[haloPSA.operation].execute.call(this, i);
				break;
			default: {
				const generated = generatedResourceHandlers[haloPSA.resource];
				if (generated?.[haloPSA.operation]?.execute) {
					responseData = await generated[haloPSA.operation].execute.call(this, i);
				}
				break;
			}
			}

			const executionData = this.helpers.returnJsonArray(responseData);
			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}