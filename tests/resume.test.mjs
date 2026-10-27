import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const source = await readFile(new URL('../apps/resume/src/app/data/resume.data.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { resume } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

test('preserves all original resume sections', () => {
  assert.equal(resume.name, 'Leela Ravi Teja Vattem');
  assert.equal(resume.experience.length, 3);
  assert.equal(resume.education.length, 3);
  assert.equal(resume.software.length, 8);
  assert.equal(resume.languages.length, 4);
  assert.equal(resume.strengths.length, 5);
  assert.equal(resume.interests.length, 11);
  assert.deepEqual(resume.experience.map((job) => job.highlights.length), [7, 3, 3]);
});

test('links and skill values are valid', () => {
  for (const link of [resume.github, resume.linkedin]) assert.equal(new URL(link).protocol, 'https:');
  for (const skill of [...resume.software, ...resume.languages]) {
    assert.ok(skill.value >= 0 && skill.value <= 100);
    assert.ok(skill.name.length > 0);
  }
});
