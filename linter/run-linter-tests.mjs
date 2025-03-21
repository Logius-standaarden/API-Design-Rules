import {exec} from 'child_process';
import utils from 'util';
import * as path from 'path';
import * as fs from 'fs';
import { argv } from 'process';

const __dirname = import.meta.dirname;
const execute = utils.promisify(exec);
const readFile = utils.promisify(fs.readFile);
const readdir = utils.promisify(fs.readdir);
const writeFile = utils.promisify(fs.writeFile);

const SPECTRAL_RULESET_LOCATION = path.join(__dirname, 'spectral.yml');

function computeTestCommand(apiLocation) {
    return `spectral lint -r ${SPECTRAL_RULESET_LOCATION} ${apiLocation}/openapi.json || true`
}

function removeProcessDir(output) {
    return output.replaceAll(__dirname, '');
}

async function runCommand(apiLocation) {
    try {
        const {stdout, stderr} = await execute(computeTestCommand(apiLocation));

        if (stderr) {
            console.error('Found output on stderr:');
            console.error(stderr);
            process.exit(1);
        }
        
        if (!stdout) {
            console.error('Did not find any output on stdout.');
            process.exit(1);
        }

        return removeProcessDir(stdout);
    } catch (e) {
        console.error('Failed to run command');
        console.error(e);
        process.exit(1);
    }
}

function expectedOutputLocation(apiLocation) {
    return path.join(apiLocation, 'expected-output.txt');
}

async function readExpectedOutput(apiLocation) {
    return removeProcessDir(await readFile(expectedOutputLocation(apiLocation), {encoding: 'utf-8'}));
}

async function obtainAllTestcases() {
    const apiDirectories = await readdir(path.join(__dirname, 'testcases'), {withFileTypes: true});
    return [...apiDirectories.map(dir => path.join(dir.parentPath, dir.name))];
}

const shouldRefreshOutput = argv.includes('--refresh');

for (const apiLocation of await obtainAllTestcases()) {
    const actualOutput = await runCommand(apiLocation);

    if (shouldRefreshOutput) {
        console.log(`Updated expected output of ${apiLocation}`);
        await writeFile(expectedOutputLocation(apiLocation), actualOutput, {encoding: 'utf-8'});

        continue;
    }

    console.log(`Validated expected output of ${apiLocation}`);
    const expectedOutput = await readExpectedOutput(apiLocation);

    if (actualOutput !== expectedOutput) {
        console.error("Failing diff check. Expected:")
        console.error(expectedOutput);
        console.error("but got")
        console.error(actualOutput);
        process.exit(1);
    }
}
