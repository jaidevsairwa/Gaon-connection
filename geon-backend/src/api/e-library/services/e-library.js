'use strict';

/**
 * e-library service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::e-library.e-library');
