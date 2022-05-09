const Manager = require('../lib/manager');

it('create manager object', () => {
    const manager = new Manager('Will', 2, 'will@email.com', 1);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

it('check manager methods', () => {
    const manager = new Manager('Will', 2, 'will@email.com', 1);

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');
});