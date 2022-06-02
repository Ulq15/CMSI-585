#!/usr/bin/env node

import fs from 'fs'
import ohm from 'ohm-js'

const contents = fs.readFileSync('Q5-Q7 Grammar.ohm', 'utf-8')
const myGrammar = ohm.grammar(contents)

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message || `Input failed`)
  }
}

// Test cases
const inputs = [
  'Hello',
  'World',
  'this + should + break',
  'blah',
  'what',
  'about',
  'this',
  'and',
  'asdf',
]

const userInput = 'Hello'

for (const input of inputs) {
  console.log(input)
  const m = myGrammar.match(input)
  try {
    assert(m.succeeded())
  } catch (err) {
    console.error(err)
  }
}
