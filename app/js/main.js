console.log('Webpack has started!');

require('../../app/index.html');
// require('../../app/index.pug');

require('../css/main.scss');
// require('../css/main.css');

console.warn('Modular Programming.');

require('./modules/anonymClosure');
require('./modules/globalImport');
require('./modules/modulePattern');
require('./modules/revealingModulePattern');
require('./modules/commonJsModule');
