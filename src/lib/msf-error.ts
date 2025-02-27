import {type ZodIssue} from 'zod';

class MsfError extends Error {
	statusCode: number;
	errors?: ZodIssue[];

	constructor(statusCode: number, message: string, errors?: ZodIssue[]) {
		super(message);
		this.statusCode = statusCode;
		this.errors = errors;
	}
}

export default MsfError;
