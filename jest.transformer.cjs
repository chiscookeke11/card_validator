const ts = require('typescript');

module.exports = {
  process(src, filename) {
    const transpiled = ts.transpileModule(src, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        esModuleInterop: true,
      },
      fileName: filename,
    });

    return {
      code: transpiled.outputText,
    };
  },
};
