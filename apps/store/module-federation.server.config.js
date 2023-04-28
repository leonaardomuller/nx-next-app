// @ts-check

/**
 * @type {import('@nx/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'store',
  remotes: ['product', 'checkout'],
};

module.exports = moduleFederationConfig;
