const {resolve, join} = require('path')
const {readdirSync} = require('fs')

export default function (moduleOptions) {
    const {nuxt} = this;
    if (!nuxt.options.components) {
        throw new Error('please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`')
    }

    nuxt.hook("components:dirs", (dirs) => {

        // Add ./components dir to the list
        dirs.push({
            path: join(__dirname, "./components"),
        });
    });
}
module.exports.meta = require('./package.json')
