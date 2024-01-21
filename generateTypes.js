#!/usr/bin/env node
const {apiErrors} = require('./errors');
const fs = require('node:fs/promises');
const uniq = require('uniq');

;(async () => {

    const definitions = uniq(apiErrors.map(([name, status]) => [
        exportify(status, `Http${status}Error`),
        exportify(status, `${name}Error`),
        exportify(status, `${name}`),
    ]).flat()).join('\n');

    await fs.writeFile('./index.d.ts',
        `declare module "rest-api-errors" {
    export class APIError extends Error {
        public status: number;
        public code: string;
        public message: string;
        constructor(status: number, code?: string, message?: string);
    }
    ${definitions}
}`, 'utf-8');
})()

function exportify(code, name) {
    return `
    /**
    * http ${code} error
    */
    export class ${name} extends APIError {
        constructor(code?: string, message?: string);
    }`
}
