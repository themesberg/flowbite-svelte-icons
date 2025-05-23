import type { LanguageFn } from 'highlight.js';

interface LanguageType<TName extends string> {
	name: TName;
	register: LanguageFn;
}

export declare const _1c: LanguageType<'1c'>;
export declare const abnf: LanguageType<'abnf'>;
export declare const accesslog: LanguageType<'accesslog'>;
export declare const actionscript: LanguageType<'actionscript'>;
export declare const ada: LanguageType<'ada'>;
export declare const angelscript: LanguageType<'angelscript'>;
export declare const apache: LanguageType<'apache'>;
export declare const applescript: LanguageType<'applescript'>;
export declare const arcade: LanguageType<'arcade'>;
export declare const arduino: LanguageType<'arduino'>;
export declare const armasm: LanguageType<'armasm'>;
export declare const xml: LanguageType<'xml'>;
export declare const asciidoc: LanguageType<'asciidoc'>;
export declare const aspectj: LanguageType<'aspectj'>;
export declare const autohotkey: LanguageType<'autohotkey'>;
export declare const autoit: LanguageType<'autoit'>;
export declare const avrasm: LanguageType<'avrasm'>;
export declare const awk: LanguageType<'awk'>;
export declare const axapta: LanguageType<'axapta'>;
export declare const bash: LanguageType<'bash'>;
export declare const basic: LanguageType<'basic'>;
export declare const bnf: LanguageType<'bnf'>;
export declare const brainfuck: LanguageType<'brainfuck'>;
export declare const c: LanguageType<'c'>;
export declare const cal: LanguageType<'cal'>;
export declare const capnproto: LanguageType<'capnproto'>;
export declare const ceylon: LanguageType<'ceylon'>;
export declare const clean: LanguageType<'clean'>;
export declare const clojure: LanguageType<'clojure'>;
export declare const clojureRepl: LanguageType<'clojure-repl'>;
export declare const cmake: LanguageType<'cmake'>;
export declare const coffeescript: LanguageType<'coffeescript'>;
export declare const coq: LanguageType<'coq'>;
export declare const cos: LanguageType<'cos'>;
export declare const cpp: LanguageType<'cpp'>;
export declare const crmsh: LanguageType<'crmsh'>;
export declare const crystal: LanguageType<'crystal'>;
export declare const csharp: LanguageType<'csharp'>;
export declare const csp: LanguageType<'csp'>;
export declare const css: LanguageType<'css'>;
export declare const d: LanguageType<'d'>;
export declare const markdown: LanguageType<'markdown'>;
export declare const dart: LanguageType<'dart'>;
export declare const delphi: LanguageType<'delphi'>;
export declare const diff: LanguageType<'diff'>;
export declare const django: LanguageType<'django'>;
export declare const dns: LanguageType<'dns'>;
export declare const dockerfile: LanguageType<'dockerfile'>;
export declare const dos: LanguageType<'dos'>;
export declare const dsconfig: LanguageType<'dsconfig'>;
export declare const dts: LanguageType<'dts'>;
export declare const dust: LanguageType<'dust'>;
export declare const ebnf: LanguageType<'ebnf'>;
export declare const elixir: LanguageType<'elixir'>;
export declare const elm: LanguageType<'elm'>;
export declare const ruby: LanguageType<'ruby'>;
export declare const erb: LanguageType<'erb'>;
export declare const erlangRepl: LanguageType<'erlang-repl'>;
export declare const erlang: LanguageType<'erlang'>;
export declare const excel: LanguageType<'excel'>;
export declare const fix: LanguageType<'fix'>;
export declare const flix: LanguageType<'flix'>;
export declare const fortran: LanguageType<'fortran'>;
export declare const fsharp: LanguageType<'fsharp'>;
export declare const gams: LanguageType<'gams'>;
export declare const gauss: LanguageType<'gauss'>;
export declare const gcode: LanguageType<'gcode'>;
export declare const gherkin: LanguageType<'gherkin'>;
export declare const glsl: LanguageType<'glsl'>;
export declare const gml: LanguageType<'gml'>;
export declare const go: LanguageType<'go'>;
export declare const golo: LanguageType<'golo'>;
export declare const gradle: LanguageType<'gradle'>;
export declare const graphql: LanguageType<'graphql'>;
export declare const groovy: LanguageType<'groovy'>;
export declare const haml: LanguageType<'haml'>;
export declare const handlebars: LanguageType<'handlebars'>;
export declare const haskell: LanguageType<'haskell'>;
export declare const haxe: LanguageType<'haxe'>;
export declare const hsp: LanguageType<'hsp'>;
export declare const http: LanguageType<'http'>;
export declare const hy: LanguageType<'hy'>;
export declare const inform7: LanguageType<'inform7'>;
export declare const ini: LanguageType<'ini'>;
export declare const irpf90: LanguageType<'irpf90'>;
export declare const isbl: LanguageType<'isbl'>;
export declare const java: LanguageType<'java'>;
export declare const javascript: LanguageType<'javascript'>;
export declare const jbossCli: LanguageType<'jboss-cli'>;
export declare const json: LanguageType<'json'>;
export declare const julia: LanguageType<'julia'>;
export declare const juliaRepl: LanguageType<'julia-repl'>;
export declare const kotlin: LanguageType<'kotlin'>;
export declare const lasso: LanguageType<'lasso'>;
export declare const latex: LanguageType<'latex'>;
export declare const ldif: LanguageType<'ldif'>;
export declare const leaf: LanguageType<'leaf'>;
export declare const less: LanguageType<'less'>;
export declare const lisp: LanguageType<'lisp'>;
export declare const livecodeserver: LanguageType<'livecodeserver'>;
export declare const livescript: LanguageType<'livescript'>;
export declare const llvm: LanguageType<'llvm'>;
export declare const lsl: LanguageType<'lsl'>;
export declare const lua: LanguageType<'lua'>;
export declare const makefile: LanguageType<'makefile'>;
export declare const mathematica: LanguageType<'mathematica'>;
export declare const matlab: LanguageType<'matlab'>;
export declare const maxima: LanguageType<'maxima'>;
export declare const mel: LanguageType<'mel'>;
export declare const mercury: LanguageType<'mercury'>;
export declare const mipsasm: LanguageType<'mipsasm'>;
export declare const mizar: LanguageType<'mizar'>;
export declare const perl: LanguageType<'perl'>;
export declare const mojolicious: LanguageType<'mojolicious'>;
export declare const monkey: LanguageType<'monkey'>;
export declare const moonscript: LanguageType<'moonscript'>;
export declare const n1ql: LanguageType<'n1ql'>;
export declare const nestedtext: LanguageType<'nestedtext'>;
export declare const nginx: LanguageType<'nginx'>;
export declare const nim: LanguageType<'nim'>;
export declare const nix: LanguageType<'nix'>;
export declare const nodeRepl: LanguageType<'node-repl'>;
export declare const nsis: LanguageType<'nsis'>;
export declare const objectivec: LanguageType<'objectivec'>;
export declare const ocaml: LanguageType<'ocaml'>;
export declare const openscad: LanguageType<'openscad'>;
export declare const oxygene: LanguageType<'oxygene'>;
export declare const parser3: LanguageType<'parser3'>;
export declare const pf: LanguageType<'pf'>;
export declare const pgsql: LanguageType<'pgsql'>;
export declare const php: LanguageType<'php'>;
export declare const phpTemplate: LanguageType<'php-template'>;
export declare const plaintext: LanguageType<'plaintext'>;
export declare const pony: LanguageType<'pony'>;
export declare const powershell: LanguageType<'powershell'>;
export declare const processing: LanguageType<'processing'>;
export declare const profile: LanguageType<'profile'>;
export declare const prolog: LanguageType<'prolog'>;
export declare const properties: LanguageType<'properties'>;
export declare const protobuf: LanguageType<'protobuf'>;
export declare const puppet: LanguageType<'puppet'>;
export declare const purebasic: LanguageType<'purebasic'>;
export declare const python: LanguageType<'python'>;
export declare const pythonRepl: LanguageType<'python-repl'>;
export declare const q: LanguageType<'q'>;
export declare const qml: LanguageType<'qml'>;
export declare const r: LanguageType<'r'>;
export declare const reasonml: LanguageType<'reasonml'>;
export declare const rib: LanguageType<'rib'>;
export declare const roboconf: LanguageType<'roboconf'>;
export declare const routeros: LanguageType<'routeros'>;
export declare const rsl: LanguageType<'rsl'>;
export declare const ruleslanguage: LanguageType<'ruleslanguage'>;
export declare const rust: LanguageType<'rust'>;
export declare const sas: LanguageType<'sas'>;
export declare const scala: LanguageType<'scala'>;
export declare const scheme: LanguageType<'scheme'>;
export declare const scilab: LanguageType<'scilab'>;
export declare const scss: LanguageType<'scss'>;
export declare const shell: LanguageType<'shell'>;
export declare const smali: LanguageType<'smali'>;
export declare const smalltalk: LanguageType<'smalltalk'>;
export declare const sml: LanguageType<'sml'>;
export declare const sqf: LanguageType<'sqf'>;
export declare const sql: LanguageType<'sql'>;
export declare const stan: LanguageType<'stan'>;
export declare const stata: LanguageType<'stata'>;
export declare const step21: LanguageType<'step21'>;
export declare const stylus: LanguageType<'stylus'>;
export declare const subunit: LanguageType<'subunit'>;
export declare const swift: LanguageType<'swift'>;
export declare const taggerscript: LanguageType<'taggerscript'>;
export declare const yaml: LanguageType<'yaml'>;
export declare const tap: LanguageType<'tap'>;
export declare const tcl: LanguageType<'tcl'>;
export declare const thrift: LanguageType<'thrift'>;
export declare const tp: LanguageType<'tp'>;
export declare const twig: LanguageType<'twig'>;
export declare const typescript: LanguageType<'typescript'>;
export declare const vala: LanguageType<'vala'>;
export declare const vbnet: LanguageType<'vbnet'>;
export declare const vbscript: LanguageType<'vbscript'>;
export declare const vbscriptHtml: LanguageType<'vbscript-html'>;
export declare const verilog: LanguageType<'verilog'>;
export declare const vhdl: LanguageType<'vhdl'>;
export declare const vim: LanguageType<'vim'>;
export declare const wasm: LanguageType<'wasm'>;
export declare const wren: LanguageType<'wren'>;
export declare const x86asm: LanguageType<'x86asm'>;
export declare const xl: LanguageType<'xl'>;
export declare const xquery: LanguageType<'xquery'>;
export declare const zephir: LanguageType<'zephir'>;
