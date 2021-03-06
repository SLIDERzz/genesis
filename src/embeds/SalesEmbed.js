'use strict';

const BaseEmbed = require('./BaseEmbed.js');
const { assetBase } = require('../CommonFunctions');

const darvo = `${assetBase}/img/darvo-md.png`;

/**
 * Generates daily deal embeds
 */
class SalesEmbed extends BaseEmbed {
  /**
   * @param {Genesis} bot - An instance of Genesis
   * @param {Array.<FeaturedItemSales>} sales - The sales to be displayed as featured or popular
   * @param {string} platform - platform
   */
  constructor(bot, sales, platform) {
    super();

    this.color = 0x0000ff;
    this.title = sales[0].isPopular ? `[${platform.toUpperCase()}] Popular Sales ` : `[${platform.toUpperCase()}] Featured Deal`;
    this.thumbnail = {
      url: darvo,
    };
    this.fields = [];
    sales.forEach((sale) => {
      this.fields.push({
        name: `${sale.item}, ${sale.premiumOverride}p ${sale.discount > 0 ? `${sale.discount}% off` : ''}`,
        value: `Expires in ${sale.eta}`,
      });
    });
  }
}

module.exports = SalesEmbed;
