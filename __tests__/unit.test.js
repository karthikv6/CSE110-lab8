// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('925-364-1886 is a phone number', () => {
    expect(functions.isPhoneNumber('925-364-1886')).toBe(true);
});

test('510-598-7669 is a phone number', () => {
    expect(functions.isPhoneNumber('510-598-7669')).toBe(true);
});

test('925-364-188 is a not phone number', () => {
    expect(functions.isPhoneNumber('925-364-188')).toBe(false);
});

test('510-598-766 is a phone number', () => {
    expect(functions.isPhoneNumber('510-598-766')).toBe(false);
});

test('karthik@gmail.com is an email', () => {
    expect(functions.isEmail('karthik@gmail.com')).toBe(true);
});

test('vetri@gmail.com is an email', () => {
    expect(functions.isEmail('vetri@gmail.com')).toBe(true);
});

test('karthikgmail.com is not an email', () => {
    expect(functions.isEmail('karthikgmail.com')).toBe(false);
});

test('vetrigmail.com is not an email', () => {
    expect(functions.isEmail('vetrigmail.com')).toBe(false);
});

test('CSE110 is a strong password', () => {
    expect(functions.isStrongPassword('CSE110')).toBe(true);
});

test('team25 is a strong password', () => {
    expect(functions.isStrongPassword('team25')).toBe(true);
});

test('C is not a strong password', () => {
    expect(functions.isStrongPassword('C')).toBe(false);
});

test('2 is not a strong password', () => {
    expect(functions.isStrongPassword('2')).toBe(false);
});

test('11/20/2022 is a date', () => {
    expect(functions.isDate('12/12/2001')).toBe(true);
});

test('01//2022 is a date', () => {
    expect(functions.isDate('12/12/2001')).toBe(true);
});

test('1120/2022 is not a date', () => {
    expect(functions.isDate('1120/2001')).toBe(false);
});

test('01//2022 is not a date', () => {
    expect(functions.isDate('01//2022')).toBe(false);
});

test('Test if #9D311A is a hex color', () => {
    expect(functions.isHexColor('#9D311A')).toBe(true);
});

test('Test if #FF2D00 is a hex color', () => {
    expect(functions.isHexColor('#FF2D00')).toBe(true);
});

test('Test if #9D311 is not a hex color', () => {
    expect(functions.isHexColor('#9D311')).toBe(false);
});

test('Test if #FF2D0 is not a hex color', () => {
    expect(functions.isHexColor('#FF2D0')).toBe(false);
});