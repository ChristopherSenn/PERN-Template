const tsJest = require("ts-jest");

module.exports = {
    process(src, filename, options) {
        const importMetaString = "import.meta.env";
        const processEnvString = "process.env";
        const replaceImportMeta = src.replace(importMetaString, processEnvString);

        const tsJestTransformer = tsJest.default.createTransformer();
        const tsTransformed = tsJestTransformer.process(replaceImportMeta, filename, options);

        return tsTransformed;
    },
};
