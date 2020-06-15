let wasmExports
let wasmMemory = new WebAssembly.Memory({initial:256,maximum:256});
let wasmTable = new WebAssembly.Table({
    'initial': 1,
    'maximum': 1,
    'element': 'anyfunc'
});

let asmLibArg = {
    "__handle_stack_overflow" : () => {},
    "emscripten_resize_heap" : () => {},
    "__lock": () =>{},
    "__unlock" : () =>{},
    "memory" : wasmMemory,
    "table" : wasmTable
}
let info = {'env' : asmLibArg};
async function loadWASM(){
    let response = await fetch('fib.wasm');
    let bytes = await response.arrayBuffer();

    let wasmObj = await WebAssembly.instantiate(bytes,info);
    wasmExports = wasmObj.instance.exports;
}
loadWASM();