const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Will', 20, 'will@email.com');

    expect(employee.name).toBe('Will');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('check getName method', () => {
    const employee = new Employee('Will', 20, 'will@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('check getId method', () => {
    const employee = new Employee('Will', 20, 'will@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('check getEmail method', () => {
    const employee = new Employee('Will', 20, 'will@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('check getRole method', () => {
    const employee = new Employee('Will', 20, 'will@email.com');

    expect(employee.getRole()).toBe('Employee');
});