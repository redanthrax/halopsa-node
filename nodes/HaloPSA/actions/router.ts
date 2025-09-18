import { IExecuteFunctions } from 'n8n-workflow';
import {
	IDataObject,
	INodeExecutionData,
} from 'n8n-workflow';

import * as agents from './agents';
import * as assets from './assets';
import * as client from './client';
import * as fieldInfo from './fieldInfo';
import * as invoices from './invoices';
import * as sites from './sites';
import * as tickets from './tickets';
import * as ticketStatuses from './ticketStatuses';
import * as ticketTypes from './ticketTypes';
import * as timesheet from './timesheet';
import * as timesheetEvent from './timesheetEvent';
import * as webhooks from './webhooks';
import * as webhookEvents from './webhookEvents';
import { HaloPSA } from './Interfaces';

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
			case 'agents':
				responseData = await (agents as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'assets':
				responseData = await (assets as any)[haloPSA.operation].execute.call(this, i);
				break;
		case 'client':
			responseData = await (client as any)[haloPSA.operation].execute.call(this, i);
			break;
		case 'fieldInfo':
			responseData = await (fieldInfo as any)[haloPSA.operation].execute.call(this, i);
			break;
		case 'invoices':
				responseData = await (invoices as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'sites':
				responseData = await (sites as any)[haloPSA.operation].execute.call(this, i);
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
			case 'webhooks':
				responseData = await (webhooks as any)[haloPSA.operation].execute.call(this, i);
				break;
			case 'webhookEvents':
				responseData = await (webhookEvents as any)[haloPSA.operation].execute.call(this, i);
				break;
			default:
				break;
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