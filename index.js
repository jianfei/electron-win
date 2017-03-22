const isMainProcess = process.type === 'browser';

if (isMainProcess) {
    console.log('main');
} else {
    console.log('renderer');
}

module.exports = {
};