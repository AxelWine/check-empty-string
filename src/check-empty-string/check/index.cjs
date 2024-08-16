const sanitizeString = require('../sanitize-string/index.cjs');

module.exports = str => sanitizeString(str).length === 0;