const compileCommonJS = require('loot-ml').compileCommonJS;

module.exports = function(source) {
    return compileCommonJS(source);
};
