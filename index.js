#!/usr/bin/env node

const pkg = require('./package.json')

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
`)
