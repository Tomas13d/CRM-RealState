"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.isValidEmail = void 0;
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
