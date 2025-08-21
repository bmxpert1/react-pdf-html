"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderers_1 = require("./renderers");
const type_1 = __importDefault(require("node-html-parser/dist/nodes/type"));
const table = {
    nodeType: type_1.default.ELEMENT_NODE,
    tagName: 'table',
    attributes: {},
    childNodes: [
        {
            nodeType: type_1.default.ELEMENT_NODE,
            tagName: 'thead',
            attributes: {},
            childNodes: [
                {
                    nodeType: type_1.default.ELEMENT_NODE,
                    tagName: 'tr',
                    attributes: {},
                    childNodes: [
                        {
                            nodeType: type_1.default.ELEMENT_NODE,
                            tagName: 'td',
                            attributes: {},
                            childNodes: [],
                        },
                        {
                            nodeType: type_1.default.ELEMENT_NODE,
                            tagName: 'td',
                            attributes: {},
                            childNodes: [],
                        },
                    ],
                },
            ],
        },
        {
            nodeType: type_1.default.ELEMENT_NODE,
            tagName: 'tbody',
            childNodes: [
                {
                    nodeType: type_1.default.ELEMENT_NODE,
                    tagName: 'tr',
                    attributes: {},
                    childNodes: [
                        {
                            nodeType: type_1.default.ELEMENT_NODE,
                            tagName: 'td',
                            attributes: {
                                colspan: 2,
                            },
                            childNodes: [],
                        },
                    ],
                },
                {
                    nodeType: type_1.default.ELEMENT_NODE,
                    tagName: 'tr',
                    attributes: {},
                    childNodes: [
                        {
                            nodeType: type_1.default.ELEMENT_NODE,
                            tagName: 'td',
                            attributes: {},
                            childNodes: [],
                        },
                    ],
                },
            ],
        },
    ],
};
describe('renderers', () => {
    describe('childElements', () => {
        it('Should find child elements matching specified tag names', () => {
            const result = (0, renderers_1.childElements)(table, ['tbody']);
            expect(result[0]).toBe(table.childNodes[1]);
        });
    });
    describe('getRows', () => {
        it('Should get all rows in a table', () => {
            expect((0, renderers_1.getRows)(table).length).toBe(3);
        });
    });
    describe('getMaxColumns', () => {
        it('Should count max number of columns in a table', () => {
            expect((0, renderers_1.getMaxColumns)(table)).toBe(2);
        });
    });
});
//# sourceMappingURL=renderers.test.js.map