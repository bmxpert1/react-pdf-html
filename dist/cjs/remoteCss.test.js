"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const remoteCss_js_1 = require("./remoteCss.js");
describe('fetchStylesheets', () => {
    it('Should resolve remote stylesheets', () => __awaiter(void 0, void 0, void 0, function* () {
        const html = `<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous" />
  </head>
  
  <body>
    <div></div>
  </body>
</html>`;
        const stylesheets = yield (0, remoteCss_js_1.fetchStylesheets)(html);
        expect(stylesheets[0][':root']).toEqual({
            '-BsBreakpointXs': '0',
            '-BsBreakpointSm': '576px',
            '-BsBreakpointMd': '768px',
            '-BsBreakpointLg': '992px',
            '-BsBreakpointXl': '1200px',
            '-BsBreakpointXxl': '1400px',
        });
    }));
});
//# sourceMappingURL=remoteCss.test.js.map