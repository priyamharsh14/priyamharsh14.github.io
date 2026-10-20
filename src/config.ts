/** Site-wide settings. Free integrations stay off until the accounts exist. */

export const siteUrl = "https://priyamharsh14.github.io";

export const integrations = {
  /**
   * TODO: create a free GoatCounter account (https://www.goatcounter.com),
   * then set enabled to true and code to the site code (the subdomain only,
   * without .goatcounter.com). Leave this off to ship with no analytics.
   */
  goatcounter: {
    enabled: false,
    code: "",
  },
  /**
   * TODO: create a free Web3Forms account (https://web3forms.com) and paste
   * the access key. The contact page already works through mailto.
   */
  web3forms: {
    enabled: false,
    accessKey: "",
  },
  /**
   * TODO: turn on GitHub Discussions for this repo, configure https://giscus.app,
   * then fill these ids and set enabled to true. Comments stay off until then.
   * The giscus theme follows the operating system, not the on-site theme toggle.
   */
  giscus: {
    enabled: false,
    repo: "",
    repoId: "",
    category: "",
    categoryId: "",
  },
} as const;
