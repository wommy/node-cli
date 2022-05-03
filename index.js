#!/usr/bin/env node

const pkg = require('./package.json')
const path_i3r0y = './rd/22/03-14--i3r0y.md'
// import { readFile } from 'fs'
const readFile = require('fs').readFile

const i3r0y = await readFile(path_i3r0y, 'utf8', (err, data) => {
	if (err) throw err
	return data
})

console.log(`
	name: ${pkg.name}
	version: ${pkg.version}
	description: ${pkg.description}

	About
	---
	  my name is Tommy, i was born in 1990
	i make websites, mostly using 
	    Static Site Generators (SSGs)
	
	rd
	---
	TUDO:
	  - [ ] fetch \`wommy/rd\`
	  - [ ] ? fetch \`tudo\`
	
	program structure
	---
	- fetch \`~/rd/22/05-may\`
	  fake fetched it,
		REVISIT
	- load contents?

	${i3r0y}
	
`)
