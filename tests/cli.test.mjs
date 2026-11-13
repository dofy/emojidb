import { test } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const cli = resolve('bin/index.js')
const fixture = `# Version: 18.0\n# group: Smileys & Emotion\n# subgroup: face-smiling\n1F600 ; fully-qualified # 😀 E1.0 user's smile\n1F44B 1F3FD ; fully-qualified # 👋🏽 E1.0 waving hand: medium skin tone\n`

test('CLI exports emoji data in each supported format', () => {
  const dir = mkdtempSync(join(tmpdir(), 'emojidb-test-'))
  try {
    const source = join(dir, 'input.txt')
    writeFileSync(source, fixture)
    const output = join(dir, 'result')
    const run = (...args) => execFileSync(process.execPath, [cli, '-s', source, '-f', output, ...args])

    run()
    const json = JSON.parse(readFileSync(`${output}.json`, 'utf8'))
    assert.equal(json.version, '18.0')
    assert.equal(json.emojis.length, 2)
    assert.equal(json.emojis[1].codepoints, '1F44B,1F3FD')
    assert.equal(json.emojis[1].emoji, '👋🏽')
    assert.equal(json.emojis[0].name, "E1.0 user's smile")

    run('-t', 'sql')
    const sql = readFileSync(`${output}.sql`, 'utf8')
    assert.match(sql, /E1\.0 user''s smile/)
    assert.equal((sql.match(/INSERT INTO/g) || []).length, 2)

    run('-t', 'csv')
    const csv = readFileSync(`${output}.csv`, 'utf8')
    assert.match(csv, /waving hand/)
    assert.match(csv, /👋🏽/)

    run('-t', 'xml')
    const xml = readFileSync(`${output}.xml`, 'utf8')
    assert.match(xml, /Smileys &amp; Emotion/)
    assert.match(xml, /👋🏽/)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test('CLI returns a failure for missing input', () => {
  const result = spawnSync(process.execPath, [cli, '-s', join(tmpdir(), 'emojidb-missing-input-test.txt')], { encoding: 'utf8' })
  assert.equal(result.status, 1)
  assert.match(result.stderr, /ENOENT/)
})
