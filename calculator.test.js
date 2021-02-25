import { TestScheduler } from 'jest';
import calculator from './calculator';

test('It adds', () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test('It subtracts', () => {
	expect(calculator.subtract(4, 3)).toBe(1);
});

test('It multiplies', () => {
	expect(calculator.multiply(2, 5)).toBe(10);
});

test('It divides', () => {
	expect(calculator.divide(6, 3)).toBe(2);
});

test('Works with string numbers', () => {
	expect(calculator.add('4', 8)).toBe(12);
});
