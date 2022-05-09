const Intern = require('../lib/intern');

it('create intern object', () => {
    const intern = new Intern('Will', 2, 'will@email.com', 'Real School University');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

it('check intern methods', () => {
    const intern = new Intern('Will', 2, 'will@email.com', 'Real School University');

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
});