module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-controls",
        "@storybook/addon-knobs",
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\,css&/,
            use: [
                {
                    loader: "postcss-loader",
                    options: {
                        ident: "postcss",
                    },
                },
            ],
            include: path.resolve(__dirname, "../"),
        });
        return config;
    },
};
