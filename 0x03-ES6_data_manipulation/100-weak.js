export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const numOfCalls = weakMap.get(endpoint);
  weakMap.set(endpoint, numOfCalls + 1);
  if (numOfCalls >= 5) throw new Error('Endpoint load is high');
}
