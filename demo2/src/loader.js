const utils = require('loader-utils');
// import { getOptions } from 'loader-utils';

function loader(source) {
  const options = utils.getOptions(this);

  source = source.replace(/\[name\]/g, options.name);

  return `export default ${JSON.stringify(source)}`;
}

module.exports = loader;
