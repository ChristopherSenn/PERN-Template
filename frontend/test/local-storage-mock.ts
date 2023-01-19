export class LocalSorageMock {
    store: Record<string, string>;

    constructor() {
        this.store = {};
    }

    clear(): void {
        this.store = {};
    }

    getItem(key: string): string | null {
        return this.store[key] || null;
    }

    setItem(key: string, value: string): void {
        this.store[key] = String(value);
    }

    removeItem(key: string): void {
        delete this.store[key];
    }

    get length(): number {
        return Object.keys(this.store).length;
    }

    key(): string {
        return "";
    }
}
