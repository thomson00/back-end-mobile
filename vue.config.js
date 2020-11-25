const cdn = require('./cdn.json');
module.exports = {
    outputDir: 'back-end-mobile',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].cdn = cdn;
            return args;
        });
    }
};
