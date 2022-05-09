const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

it('create employee object', () => {
    const employee = new Employee('Will', 2, 'will@email.com');

    expect(employee.name).toBe('Will');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

it('check getName method', () => {
    const employee = new Employee('Will', 2, 'will@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

it('check getId method', () => {
    const employee = new Employee('Will', 2, 'will@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

it('check getEmail method', () => {
    const employee = new Employee('Will', 2, 'will@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

it('check getRole method', () => {
    const employee = new Employee('Will', 2, 'will@email.com');

    expect(employee.getRole()).toBe('Employee');
});