import { APP_INITIALIZER } from "@angular/core";

export function initializeApp() {
  return (): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      console.log("initializeApp:: inside APP_INITIALIZER");
      resolve();
    });
  }
}

export const APP_INITIALIZER_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: initializeApp,
  multi: true,
  deps: [],
}
