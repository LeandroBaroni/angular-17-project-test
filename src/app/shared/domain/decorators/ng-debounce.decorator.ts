/**
 * Debounce decorator that can be used to debounce a function in Angular applications.
 *
 * @param timeout - The debounce timeout in milliseconds.
 * @returns A modified version of the original function that is debounced.
 *
 * @example
 * ```typescript
 * @ngDebounce(500)
 * search() {
 *   // perform search operation
 * }
 * ```
 */
export function ngDebounce(timeout: number) {
  let timeoutRef: any = null;

  return function (_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      clearTimeout(timeoutRef);

      timeoutRef = setTimeout(() => {
        original.apply(this, args);
      }, timeout);
    };

    return descriptor;
  };
}
