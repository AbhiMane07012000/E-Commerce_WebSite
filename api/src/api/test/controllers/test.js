'use strict';
const bcrypt = require('bcryptjs');


/**
 * test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test.test',({ strapi }) => ({
    async create(ctx) {
      let { pass } = ctx.request.body;
      console.log(pass);
      pass = bcrypt.hash(pass,10)
      console.log(pass)
      await strapi.service('api::test.test')
      .create({ data: { pass } });
      
    }
  }));
