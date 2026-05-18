import * as bookmark from './bookmark';
import * as contractUtilisation from './contractUtilisation';
import * as createPdf from './createPdf';
import * as executeQuery from './executeQuery';
import * as getAll from './getAll';
import * as getById from './getById';
import * as getPublishedData from './getPublishedData';
import * as getRepositoryById from './getRepositoryById';
import * as listRepository from './listRepository';
import * as print from './print';
import * as run from './run';

import { INodeProperties } from 'n8n-workflow';

export {
	bookmark,
	contractUtilisation,
	createPdf,
	executeQuery,
	getAll,
	getById,
	getPublishedData,
	getRepositoryById,
	listRepository,
	print,
	run,
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
			},
		},
		options: [
			{
				name: 'Contract Utilisation',
				value: 'contractUtilisation',
				description: 'Agreement hours charged vs entitlement for a UTC period',
				action: 'Get contract utilisation',
			},
			{
				name: 'Execute SQL Query',
				value: 'executeQuery',
				description: 'Run a read-only SELECT against the reporting database',
				action: 'Execute a reporting SQL query',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a report definition by ID',
				action: 'Get a report by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'List saved report definitions',
				action: 'Get many reports',
			},
			{
				name: 'Bookmark Report',
				value: 'bookmark',
				description: 'Bookmark a saved report',
				action: 'Bookmark a report',
			},
			{
				name: 'Create PDF',
				value: 'createPdf',
				description: 'Generate a PDF from a saved report',
				action: 'Create a report PDF',
			},
			{
				name: 'Get Published Report Data',
				value: 'getPublishedData',
				description: 'Get published report data by ID',
				action: 'Get published report data',
			},
			{
				name: 'Get Repository Report by ID',
				value: 'getRepositoryById',
				description: 'Get a report from the online repository',
				action: 'Get a repository report by ID',
			},
			{
				name: 'List Repository Reports',
				value: 'listRepository',
				description: 'List reports from the online repository',
				action: 'List repository reports',
			},
			{
				name: 'Print',
				value: 'print',
				description: 'Print a saved report',
				action: 'Print a report',
			},
			{
				name: 'Run',
				value: 'run',
				description: 'Load a saved report with loadreport=true',
				action: 'Run a report',
			},
		],
		default: 'executeQuery',
	},
	...bookmark.bookmarkDescription,
	...contractUtilisation.contractUtilisationDescription,
	...createPdf.createPdfDescription,
	...executeQuery.description,
	...getAll.description,
	...getById.description,
	...getPublishedData.getPublishedDataDescription,
	...getRepositoryById.getRepositoryByIdDescription,
	...listRepository.listRepositoryDescription,
	...print.printDescription,
	...run.description,
];
