"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);

const app = _express2.default.call(void 0, )
app.use(_bodyparser2.default.json())

app.listen(5000, () => {
  console.log('Hello ever running Node.js project.')
})
