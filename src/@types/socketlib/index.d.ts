
declare namespace socketlib {
  function registerModule(name: string): Socket

  interface Socket {
    // eslint-disable-next-line @typescript-eslint/ban-types
    register: (event: string, fn: Function) => void
    executeForEveryone: (event: string, state: Record<string, unknown>) => Promise<unknown>
  }
}
