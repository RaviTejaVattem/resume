import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const source = await readFile(new URL('../apps/resume/src/app/data/resume.data.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { resume } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

test('contains all expected resume sections', () => {
  assert.equal(resume.name, 'Leela Ravi Teja Vattem');
  assert.equal(resume.location, 'London, United Kingdom');
  assert.equal(resume.experience.length, 4);
  assert.equal(resume.education.length, 1);
  assert.equal(resume.skills.length, 4);
  assert.equal(resume.strengths.length, 5);
  assert.equal(resume.interests.length, 4);
  assert.deepEqual(resume.experience.map((job) => job.highlights.length), [9, 5, 3, 3]);
});

test('keeps content within the two-page print budget', () => {
  assert.ok(resume.interests.length <= 4);
  assert.ok(resume.education.length <= 1);
  assert.ok(resume.experience.every((job) => job.technologies.length > 0));
});

test('skill groups are non-empty and have no duplicates', () => {
  const all = resume.skills.flatMap((group) => group.items);
  for (const group of resume.skills) {
    assert.ok(group.name.length > 0);
    assert.ok(group.items.length > 0);
  }
  assert.equal(new Set(all).size, all.length);
  for (const required of ['Signals', 'Strictly typed forms', 'NgRx', 'Svelte', 'NestJS']) assert.ok(all.includes(required));
});

test('employment history is current and in order', () => {
  assert.equal(resume.experience[0].company, 'Aviva PLC (Direct Line Group)');
  assert.match(resume.experience[0].period, /Present$/);
  assert.match(resume.experience[1].period, /December 2022$/);
  assert.equal(resume.experience.filter((job) => /Present$/.test(job.period)).length, 1);
});

test('links are valid', () => {
  for (const link of [resume.github, resume.linkedin]) assert.equal(new URL(link).protocol, 'https:');
});
