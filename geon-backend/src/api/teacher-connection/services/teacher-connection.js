'use strict';

/**
 * teacher-connection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::teacher-connection.teacher-connection');
