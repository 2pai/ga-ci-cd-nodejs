const {greeting} = require('./user')

test('should return null when params is null', () => {
    expect(greeting()).toBe()
})

test('should return Hello + name', () => {
    expect(greeting('Iqbal')).toBe('Hello Iqbal')
})
