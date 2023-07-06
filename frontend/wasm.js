let factorial;
fetch("test.wasm")
.then(bytes => bytes.arrayBuffer())
.then(mod => WebAssembly.compile(mod))
.then(module => {return new WebAssembly.Instance(module) })
.then(instance => {
factorial = instance.exports._Z4facti;
});