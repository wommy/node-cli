#!/usr/bin/env node

import pkg from './package.json' assert { type: 'json' }
const path_i3r0y = 'https://raw.githubusercontent.com/wommy/rd/master/22/03-14--i3r0y.md'
const i3r0y = await fetch(path_i3r0y).then( a => a.text() )

console.log(`
	name: $
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

	${'\n' + i3r0y.trim()}
	
`)
