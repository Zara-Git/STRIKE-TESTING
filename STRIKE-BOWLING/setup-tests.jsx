import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { server } from './src/mocks/setup';

afterEach(() => {
  cleanup();
});

// Before all tests, start and listen to the server
beforeAll(() => {
  server.listen();
});

// After all tests, shut down the server
afterAll(() => {
  server.close();
});
