import process from './lib/process';

const plugin = () => {
    return {
        postcssPlugin: 'postcss-conditionals-renewed',
        Once(root) {
            process(root);
        }
    };
};
plugin.postcss = true;

export default plugin;
