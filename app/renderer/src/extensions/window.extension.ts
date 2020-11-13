import Electron from "electron";

declare global {
	interface Window {
		electron: {
			send: (channel: string, ...args: any[]) => void;
			receive: (channel: string, response: Function) => void;
			openExternal: (
				url: string,
				options?: Electron.OpenExternalOptions
			) => Promise<void>;
		};
	}
}

export {};
