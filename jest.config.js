module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!(firebase|@firebase)/)'
  ],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  globals: { 'ts-jest': { tsconfig: 'tsconfig.test.json' } }
}
