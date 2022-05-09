const Engineer = require('../lib/Engineer');

it('create Engineer object', () => {
    const engineer = new Engineer('Will', 2, 'will@email.com', 'WBrooks28');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

it('check Engineer methods', () => {
    const engineer = new Engineer('Will', 2, 'will@email.com', 'WBrooks28');

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGitHub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
});