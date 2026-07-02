async function risky(): Promise<void> {
  await Promise.resolve()
}

export function run(): void {
  risky()
}
