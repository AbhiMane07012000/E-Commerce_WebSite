'use strict';

/**
 * customer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::customer.customer',({ strapi }) => ({
    async create(ctx) {
      const { firstName,lastName,email,MobileNumber,Address,Password,Cpass } = ctx.request.body;
      console.log(Password,Cpass);
      await strapi.service('api::customer.customer')
      .create({ data: { firstName,lastName,email,MobileNumber,Address,Password,Cpass} });
      
    }
  }));
