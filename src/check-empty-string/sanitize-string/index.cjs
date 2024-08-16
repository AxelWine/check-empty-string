const iconv = require('iconv-lite');

module.exports = str => {
  if (typeof str !== 'string' && !Buffer.isBuffer(str)) {
    throw new TypeError('Expected a string or buffer');
  }

  if (Buffer.isBuffer(str)) {
    str = iconv.decode(str, 'utf8');
  }

  return str.replace(/[\s\u2000-\u200F\u2028-\u2029\u202A-\u202F\u2060-\u206F]+/g, '').trim();
};