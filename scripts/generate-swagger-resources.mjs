#!/usr/bin/env node
/**
 * Generates standard CRUD n8n operations from swagger.json for paths not yet implemented manually.
 * Run: node scripts/generate-swagger-resources.mjs
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SWAGGER_PATH = path.join(ROOT, 'swagger.json');
const ACTIONS_DIR = path.join(ROOT, 'nodes/HaloPSA/actions');
const GENERATED_DIR = path.join(ACTIONS_DIR, 'generated');

const swagger = JSON.parse(fs.readFileSync(SWAGGER_PATH, 'utf8'));

const EXISTING_ALIASES = {
	actions: 'Actions',
	agents: 'Agent',
	appointments: 'Appointment',
	approvalProcesses: 'ApprovalProcess',
	approvalProcessRules: 'ApprovalProcessRule',
	assets: 'Asset',
	attachments: 'Attachment',
	automations: 'Automation',
	cannedText: 'CannedText',
	categories: 'Category',
	client: 'Client',
	contracts: 'ClientContract',
	contractRules: 'ContractRule',
	contractSchedules: 'ContractSchedule',
	contractSchedulePlans: 'ContractSchedulePlan',
	customApi: null,
	feed: 'Feed',
	fieldInfo: 'FieldInfo',
	holidays: 'Holiday',
	invoicePayments: 'InvoicePayment',
	invoices: 'Invoice',
	items: 'Item',
	knowledgeBase: 'KBArticle',
	lookups: 'Lookup',
	notifications: 'Notifications',
	opportunities: 'Opportunities',
	outcomes: 'Outcome',
	productBranches: 'ProductBranch',
	productComponents: 'ProductComponent',
	projects: 'Projects',
	purchaseOrders: 'PurchaseOrder',
	quotations: 'Quotation',
	raynet: 'Raynet',
	raynetDetails: 'RaynetDetails',
	recurringInvoices: 'RecurringInvoice',
	releaseNoteGroups: 'ReleaseNoteGroup',
	releases: 'Release',
	reporting: 'Report',
	salesOrders: 'SalesOrder',
	secureSecretLinks: 'SecureSecretLink',
	securityChecks: 'SecurityCheck',
	sites: 'Site',
	suppliers: 'Supplier',
	surveys: 'Feedback',
	tags: 'Tags',
	teams: 'Team',
	ticketApprovals: 'TicketApproval',
	ticketTodos: 'ToDo',
	ticketStatuses: 'Status',
	ticketTypes: 'TicketType',
	tickets: 'Tickets',
	timesheet: 'Timesheet',
	timesheetEvent: 'TimesheetEvent',
	todoGroups: 'ToDoGroup',
	topLevels: 'TopLevel',
	transcriptionStore: 'TranscriptionStore',
	users: 'Users',
	webhooks: 'Webhook',
	webhookEvents: 'WebhookEvent',
};

function listManualResourceDirs() {
	return fs.readdirSync(ACTIONS_DIR, { withFileTypes: true })
		.filter((d) => d.isDirectory() && d.name !== 'generated' && d.name !== 'interfaces')
		.map((d) => d.name);
}

function isCoveredSwaggerRoot(swaggerRoot) {
	const lower = swaggerRoot.toLowerCase();
	for (const [dir, alias] of Object.entries(EXISTING_ALIASES)) {
		if (!alias) continue;
		if (alias.toLowerCase() === lower) return true;
		if (dir.toLowerCase() === lower) return true;
	}
	for (const dir of listManualResourceDirs()) {
		if (dir.toLowerCase() === lower) return true;
	}
	return false;
}

function classifyRoot(swaggerRoot) {
	const paths = Object.keys(swagger.paths).filter(
		(p) => p.split('/').filter(Boolean)[0] === swaggerRoot,
	);
	const base = `/${swaggerRoot}`;
	const idRe = new RegExp(`^/${swaggerRoot}/\\{[^}]+\\}$`);
	const methods = (p) =>
		swagger.paths[p] ? Object.keys(swagger.paths[p]).filter((m) => !m.startsWith('x-')) : [];

	const baseMethods = methods(base);
	return {
		swaggerRoot,
		paths,
		getList: paths.includes(base) && baseMethods.includes('get'),
		postList: paths.includes(base) && baseMethods.includes('post'),
		getOne: paths.some((p) => idRe.test(p) && methods(p).includes('get')),
		deleteOne: paths.some((p) => idRe.test(p) && methods(p).includes('delete')),
		putOne: paths.some(
			(p) => idRe.test(p) && (methods(p).includes('put') || methods(p).includes('patch')),
		),
		postOne: paths.some((p) => idRe.test(p) && methods(p).includes('post')),
		subPaths: paths.filter((p) => p !== base && !idRe.test(p)),
	};
}

function toCamelCase(str) {
	return str.charAt(0).toLowerCase() + str.slice(1);
}

function toDisplayName(swaggerRoot) {
	return swaggerRoot.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ');
}

function toIdParam(swaggerRoot) {
	const singular = swaggerRoot.endsWith('ies')
		? swaggerRoot.slice(0, -3) + 'y'
		: swaggerRoot.endsWith('s')
			? swaggerRoot.slice(0, -1)
			: swaggerRoot;
	return toCamelCase(singular) + 'Id';
}

const RESERVED_IDS = new Set([
	'delete', 'import', 'export', 'default', 'class', 'function', 'return', 'field',
	'package', 'mailbox', 'switch', 'case', 'break', 'continue', 'typeof', 'instanceof',
	'void', 'null', 'true', 'false', 'in', 'of', 'var', 'let', 'const', 'enum', 'interface',
]);

function sanitizeIdentifier(name) {
	let s = String(name)
		.replace(/\{[^}]*\}/g, '')
		.replace(/[^a-zA-Z0-9_]/g, '_')
		.replace(/^_+|_+$/g, '')
		.replace(/_+/g, '_');
	if (!s) s = 'call';
	if (/^[0-9]/.test(s)) s = `op${s}`;
	if (RESERVED_IDS.has(s)) s = `op${s.charAt(0).toUpperCase()}${s.slice(1)}`;
	return s;
}

function opFolderName(method, subPath) {
	const parts = subPath.split('/').filter(Boolean).filter((p) => !p.startsWith('{'));
	const segment = parts[parts.length - 1] || method;
	let name = segment.charAt(0).toLowerCase() + segment.slice(1);
	if (method !== 'get' && method !== 'post') {
		name = method + name.charAt(0).toUpperCase() + name.slice(1);
	}
	return sanitizeIdentifier(name);
}

function writeFile(filePath, content) {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, content);
}

function genGetAll(res, endpoint) {
	const dir = 'getAll';
	writeFile(
		path.join(res.dir, dir, 'execute.ts'),
		`import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../../getAllHelpers';

export async function execute(
\tthis: IExecuteFunctions,
\tindex: number,
): Promise<INodeExecutionData[]> {
\treturn runGetAllRequest.call(this, index, {
\t\tendpoint: '${endpoint}',
\t\tresourceKey: '',
\t\tqs: {},
\t\tmaxLimit: 100,
\t});
}
`,
	);
	writeFile(
		path.join(res.dir, dir, 'description.ts'),
		`import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
\t{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
\t\tdisplayOptions: { show: { resource: ['${res.resourceName}'], operation: ['getAll'] } }, default: false },
\t{ displayName: 'Limit', name: 'limit', type: 'number',
\t\tdisplayOptions: { show: { resource: ['${res.resourceName}'], operation: ['getAll'], returnAll: [false] } },
\t\ttypeOptions: { minValue: 1 }, default: 50 },
];
`,
	);
	writeFile(
		path.join(res.dir, dir, 'index.ts'),
		`export * from './execute';
export { getAllDescription as description } from './description';
`,
	);
}

function genGetById(res, endpoint, idParam) {
	const dir = 'getById';
	writeFile(
		path.join(res.dir, dir, 'execute.ts'),
		`import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
\tthis: IExecuteFunctions,
\tindex: number,
): Promise<INodeExecutionData[]> {
\tconst ${idParam} = this.getNodeParameter('${idParam}', index) as number;
\tconst response = await apiRequest.call(this, 'GET', \`${endpoint}/\${${idParam}}\`, {}, {});
\treturn [{ json: response, pairedItem: { item: index } }];
}
`,
	);
	writeFile(
		path.join(res.dir, dir, 'description.ts'),
		`import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
\t{ displayName: '${toDisplayName(res.swaggerRoot)} ID', name: '${idParam}', type: 'number', required: true,
\t\tdisplayOptions: { show: { resource: ['${res.resourceName}'], operation: ['getById'] } }, default: 0 },
];
`,
	);
	writeFile(
		path.join(res.dir, dir, 'index.ts'),
		`export * from './execute';
export { getByIdDescription as description } from './description';
`,
	);
}

function genCreate(res, endpoint) {
	const dir = 'create';
	writeFile(
		path.join(res.dir, dir, 'execute.ts'),
		`import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
\tthis: IExecuteFunctions,
\tindex: number,
): Promise<INodeExecutionData[]> {
\tconst additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
\tconst body = Array.isArray(additionalFields) ? additionalFields : [{ ...additionalFields }];
\tconst response = await apiRequest.call(this, 'POST', '${endpoint}', body, {});
\tconst record = Array.isArray(response) ? response[0] : response;
\treturn [{ json: record as IDataObject, pairedItem: { item: index } }];
}
`,
	);
	writeFile(
		path.join(res.dir, dir, 'description.ts'),
		`import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
\t{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
\t\tdisplayOptions: { show: { resource: ['${res.resourceName}'], operation: ['create'] } }, default: {},
\t\tdescription: 'Object or array for POST ${endpoint}' },
];
`,
	);
	writeFile(
		path.join(res.dir, dir, 'index.ts'),
		`export * from './execute';
export { createDescription as description } from './description';
`,
	);
}

function genUpdate(res, endpoint, idParam) {
	const dir = 'update';
	writeFile(
		path.join(res.dir, dir, 'execute.ts'),
		`import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
\tthis: IExecuteFunctions,
\tindex: number,
): Promise<INodeExecutionData[]> {
\tconst ${idParam} = this.getNodeParameter('${idParam}', index) as number;
\tconst updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
\tconst body = [{ id: ${idParam}, ...updateFields }];
\tconst response = await apiRequest.call(this, 'POST', '${endpoint}', body, {});
\tconst record = Array.isArray(response) ? response[0] : response;
\treturn [{ json: record as IDataObject, pairedItem: { item: index } }];
}
`,
	);
	writeFile(
		path.join(res.dir, dir, 'description.ts'),
		`import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
\t{ displayName: '${toDisplayName(res.swaggerRoot)} ID', name: '${idParam}', type: 'number', required: true,
\t\tdisplayOptions: { show: { resource: ['${res.resourceName}'], operation: ['update'] } }, default: 0 },
\t{ displayName: 'Update Fields', name: 'updateFields', type: 'json',
\t\tdisplayOptions: { show: { resource: ['${res.resourceName}'], operation: ['update'] } }, default: {} },
];
`,
	);
	writeFile(
		path.join(res.dir, dir, 'index.ts'),
		`export * from './execute';
export { updateDescription as description } from './description';
`,
	);
}

function genDelete(res, endpoint, idParam) {
	const dir = 'delete';
	writeFile(
		path.join(res.dir, dir, 'execute.ts'),
		`import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
\tthis: IExecuteFunctions,
\tindex: number,
): Promise<INodeExecutionData[]> {
\tconst ${idParam} = this.getNodeParameter('${idParam}', index) as number;
\tconst response = await apiRequest.call(this, 'DELETE', \`${endpoint}/\${${idParam}}\`, {}, {});
\treturn [{ json: (response as IDataObject) || { success: true, id: ${idParam} }, pairedItem: { item: index } }];
}
`,
	);
	writeFile(
		path.join(res.dir, dir, 'description.ts'),
		`import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
\t{ displayName: '${toDisplayName(res.swaggerRoot)} ID', name: '${idParam}', type: 'number', required: true,
\t\tdisplayOptions: { show: { resource: ['${res.resourceName}'], operation: ['delete'] } }, default: 0 },
];
`,
	);
	writeFile(
		path.join(res.dir, dir, 'index.ts'),
		`export * from './execute';
export { deleteDescription as description } from './description';
`,
	);
}

function genSubPathOp(res, subPath, httpMethod, opName) {
	const endpoint = subPath;
	const isGet = httpMethod === 'get';
	const dir = opName;

	if (isGet) {
		writeFile(
			path.join(res.dir, dir, 'execute.ts'),
			`import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
\tthis: IExecuteFunctions,
\tindex: number,
): Promise<INodeExecutionData[]> {
\tconst queryParameters = this.getNodeParameter('queryParameters', index, {}) as IDataObject;
\tconst response = await apiRequest.call(this, 'GET', '${endpoint}', {}, queryParameters);
\treturn [{ json: response as IDataObject, pairedItem: { item: index } }];
}
`,
		);
		writeFile(
			path.join(res.dir, dir, 'description.ts'),
			`import { INodeProperties } from 'n8n-workflow';

export const ${opName}Description: INodeProperties[] = [
\t{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
\t\tdisplayOptions: { show: { resource: ['${res.resourceName}'], operation: ['${opName}'] } }, default: {} },
];
`,
		);
	} else {
		writeFile(
			path.join(res.dir, dir, 'execute.ts'),
			`import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
\tthis: IExecuteFunctions,
\tindex: number,
): Promise<INodeExecutionData[]> {
\tconst additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
\tconst body = Array.isArray(additionalFields) ? additionalFields : additionalFields;
\tconst response = await apiRequest.call(this, '${httpMethod.toUpperCase()}', '${endpoint}', body, {});
\tconst record = Array.isArray(response) ? response[0] : response;
\treturn [{ json: (record ?? response) as IDataObject, pairedItem: { item: index } }];
}
`,
		);
		writeFile(
			path.join(res.dir, dir, 'description.ts'),
			`import { INodeProperties } from 'n8n-workflow';

export const ${opName}Description: INodeProperties[] = [
\t{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
\t\tdisplayOptions: { show: { resource: ['${res.resourceName}'], operation: ['${opName}'] } }, default: {} },
];
`,
		);
	}
	writeFile(
		path.join(res.dir, dir, 'index.ts'),
		`export * from './execute';
export { ${opName}Description as description } from './description';
`,
	);
	return opName;
}

function generateResource(meta) {
	const endpoint = `/${meta.swaggerRoot}`;
	const idParam = toIdParam(meta.swaggerRoot);
	const ops = [];

	if (meta.getList) {
		genGetAll(meta, endpoint);
		ops.push({ name: 'Get Many', value: 'getAll' });
	}
	if (meta.getOne) {
		genGetById(meta, endpoint, idParam);
		ops.push({ name: 'Get by ID', value: 'getById' });
	}
	if (meta.postList) {
		genCreate(meta, endpoint);
		ops.push({ name: 'Create', value: 'create' });
	}
	if (meta.putOne || meta.postOne) {
		genUpdate(meta, endpoint, idParam);
		ops.push({ name: 'Update', value: 'update' });
	}
	if (meta.deleteOne) {
		genDelete(meta, endpoint, idParam);
		ops.push({ name: 'Delete', value: 'delete' });
	}

	const imports = [];
	const exports = [];
	const descSpreads = [];
	const usedOpNames = new Set(ops.map((o) => o.value));

	const allocOpName = (method, subPath) => {
		const base = opFolderName(method, subPath);
		let name = base;
		let n = 2;
		while (usedOpNames.has(name)) {
			name = `${base}${n}`;
			n += 1;
		}
		usedOpNames.add(name);
		return name;
	};

	for (const sp of meta.subPaths) {
		const spMethods = Object.keys(swagger.paths[sp]).filter((m) => !m.startsWith('x-'));
		for (const m of spMethods) {
			const opName = allocOpName(m, sp);
			genSubPathOp(meta, sp, m, opName);
			const label = (sp.split('/').pop() || opName).replace(/\{[^}]*\}/g, '').trim() || opName;
			ops.push({ name: label, value: opName });
			imports.push(`import * as ${opName} from './${opName}';`);
			exports.push(opName);
			descSpreads.push(`...${opName}.description`);
		}
	}

	if (meta.getList) {
		imports.push(`import * as getAll from './getAll';`);
		exports.push('getAll');
		descSpreads.push('...getAll.description');
	}
	if (meta.getOne) {
		imports.push(`import * as getById from './getById';`);
		exports.push('getById');
		descSpreads.push('...getById.description');
	}
	if (meta.postList) {
		imports.push(`import * as create from './create';`);
		exports.push('create');
		descSpreads.push('...create.description');
	}
	if (meta.putOne || meta.postOne) {
		imports.push(`import * as update from './update';`);
		exports.push('update');
		descSpreads.push('...update.description');
	}
	if (meta.deleteOne) {
		imports.push(`import * as deleteOp from './delete';`);
		exports.push('deleteOp as delete');
		descSpreads.push('...deleteOp.description');
	}

	const optionsStr = ops
		.map((o) => `\t\t\t{ name: '${o.name}', value: '${o.value}', action: '${o.name} ${toDisplayName(meta.swaggerRoot)}' },`)
		.join('\n');

	writeFile(
		path.join(meta.dir, 'index.ts'),
		`${imports.join('\n')}
import { INodeProperties } from 'n8n-workflow';

export { ${exports.join(', ')} };

export const description: INodeProperties[] = [
\t{
\t\tdisplayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
\t\tdisplayOptions: { show: { resource: ['${meta.resourceName}'] } },
\t\toptions: [
${optionsStr}
\t\t],
\t\tdefault: '${ops[0]?.value ?? 'getAll'}',
\t},
\t${descSpreads.join(',\n\t')},
];
`,
	);

	return { resourceName: meta.resourceName, swaggerRoot: meta.swaggerRoot, ops: ops.map((o) => o.value) };
}

// --- main ---
const usedNames = new Set(listManualResourceDirs());
const swaggerRoots = [...new Set(Object.keys(swagger.paths).map((p) => p.split('/').filter(Boolean)[0]))];
const generated = [];

if (fs.existsSync(GENERATED_DIR)) {
	fs.rmSync(GENERATED_DIR, { recursive: true, force: true });
}
fs.mkdirSync(GENERATED_DIR, { recursive: true });

for (const swaggerRoot of swaggerRoots) {
	if (isCoveredSwaggerRoot(swaggerRoot)) continue;
	const meta = classifyRoot(swaggerRoot);
	const hasOperations =
		meta.getList || meta.postList || meta.getOne || meta.deleteOne || meta.subPaths.length > 0;
	if (!hasOperations) continue;

	let resourceName = toCamelCase(swaggerRoot);
	let n = 0;
	while (usedNames.has(resourceName)) {
		n += 1;
		resourceName = toCamelCase(swaggerRoot) + n;
	}
	usedNames.add(resourceName);

	const dir = path.join(GENERATED_DIR, resourceName);
	fs.mkdirSync(dir, { recursive: true });

	const info = generateResource({
		...meta,
		resourceName,
		dir,
	});
	generated.push(info);
}

// registry
const importLines = generated.map((g) => `import * as ${g.resourceName} from './${g.resourceName}';`);
const registryEntries = generated.map((g) => `\t${g.resourceName}: '${g.swaggerRoot}',`);
const handlerEntries = generated.map((g) => `\t${g.resourceName},`);

const descImports = generated.map((g) => `import * as ${g.resourceName} from './${g.resourceName}';`);
const descSpreads = generated.map((g) => `\t...${g.resourceName}.description,`);

writeFile(
	path.join(GENERATED_DIR, 'descriptions.ts'),
	`/* AUTO-GENERATED — do not edit by hand */
import { INodeProperties } from 'n8n-workflow';
${descImports.join('\n')}

export const generatedDescriptions: INodeProperties[] = [
${descSpreads.join('\n')}
];
`,
);

writeFile(
	path.join(GENERATED_DIR, 'registry.ts'),
	`/* AUTO-GENERATED by scripts/generate-swagger-resources.mjs — do not edit by hand */
${importLines.join('\n')}

export const generatedSwaggerRoots: Record<string, string> = {
${registryEntries.join('\n')}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generatedResourceHandlers: Record<string, any> = {
${handlerEntries.join('\n')}
};

export type GeneratedResourceName = (typeof generatedResourceNames)[number];

export const generatedResourceNames = ${JSON.stringify(generated.map((g) => g.resourceName))} as const;

export const generatedResourceOptions = [
${generated
	.map(
		(g) =>
			`\t{ name: '${toDisplayName(g.swaggerRoot)}', value: '${g.resourceName}' },`,
	)
	.join('\n')}
] as const;
`,
);

writeFile(
	path.join(GENERATED_DIR, 'manifest.json'),
	JSON.stringify({ generatedAt: new Date().toISOString(), count: generated.length, resources: generated }, null, 2),
);

console.log(`Generated ${generated.length} resources in ${GENERATED_DIR}`);
