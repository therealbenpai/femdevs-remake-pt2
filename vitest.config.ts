const config = {
    test: {
        reporters: ['junit', 'html', 'json'].concat(process.env.GITHUB_ACTIONS ? ['github-actions'] : []),
        outputFile: {
            junit: 'tests/results/junit.xml',
            html: 'tests/results/report.html',
            json: 'tests/results/report.json',
        },
        coverage: {
            enabled: true,
            reporter: ['cobertura', 'lcov', 'clover'],
            provider: 'v8',
        },
    },
};

export default config;
