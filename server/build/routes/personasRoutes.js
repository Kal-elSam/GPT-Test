"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var personasControllers_1 = __importDefault(require("../controllers/personasControllers"));
var PersonasRoutes = /** @class */ (function () {
    function PersonasRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    PersonasRoutes.prototype.config = function () {
        this.router.get('/', personasControllers_1.default.list);
        this.router.get('/:id', personasControllers_1.default.getOne);
        this.router.post('/', personasControllers_1.default.create);
        this.router.put('/:id', personasControllers_1.default.update);
        this.router.delete('/:id', personasControllers_1.default.delete);
    };
    return PersonasRoutes;
}());
var personasRoutes = new PersonasRoutes();
exports.default = personasRoutes.router;
