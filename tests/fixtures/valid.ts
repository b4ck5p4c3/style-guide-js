export async function add (a: number, b: number): Promise<number> {
  await Promise.resolve()

  return a + b
}
