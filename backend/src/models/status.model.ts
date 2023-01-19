export class StatusError extends Error {
    status: number;
    data?: string;

    constructor(message: string, status: number, data?: string) {
      super(message);

      Object.setPrototypeOf(this, StatusError.prototype);
      this.status = status;
      this.data = data;
    }
}

export interface IError {
    message: string;
  }

export class StatusMessage {
    message: string;
    status: number;
    payload?: string;

    constructor(message: string, status: number, payload?: any) {
      this.message = message;
      this.status = status;
      this.payload = payload ?? undefined;
    }
}

