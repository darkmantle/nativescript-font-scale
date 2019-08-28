const { exec } = require('child_process');
const semver = require('semver');

exec('tns --version', (err, stdout) => {
    if (err) return;

    const tnsVersion = semver.major((stdout.match(/^(?:\d+\.){2}\d+.*?$/m) || [])[0]);

    if (tnsVersion >= 4) {
        exec('tns plugin build', (err) => {
            if (err) return;
        });
    }
});