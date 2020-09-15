const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  // 收集覆盖率
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
})