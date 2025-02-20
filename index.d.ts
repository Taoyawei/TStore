// index.d.ts
declare module 'state-management-store' {
  export class Store {
    constructor(config: { state: any; methods: any });
    getState(): any;
    setState(newState: any): void;
    subscribe(listener: Function): void;
  }
}
