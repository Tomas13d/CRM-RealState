"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUndefined = exports.isValidPassword = exports.isValidEmail = void 0;
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
exports.isValidEmail = isValidEmail;
const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
    return passwordRegex.test(password);
};
exports.isValidPassword = isValidPassword;
const removeUndefined = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined));
};
exports.removeUndefined = removeUndefined;
