let chai = require("chai");
exports.config = {
  specs: ["TestCase/TC_001_Login.js"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  runner: "local",

  //Declare Server Info
  hostname: "localhost",
  port: 9515,
  path: "//",
  baseUrl:"https://www.google.com.vn/",

  //Declare Test Framework
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
  },
  reporters: [
    [
      "junit",
      {
        outputDir: "./reports",
      },
    ],
  ],
  before: ()=>{
    global.expect = chai.expect;
  }
};
