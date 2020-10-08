import Store from "electron-store";
import { nativeTheme } from "electron";
import { isWindow } from "../helpers";

type StoreProps = {
	userId: string;
	isDarkMode: boolean;
	useNativeTitlebar: boolean;
};

const store = new Store<StoreProps>();

if (store.get("isDarkMode") == null) {
	store.set("isDarkMode", nativeTheme.shouldUseDarkColors);
}

if (store.get("useNativeTitlebar") == null) {
	store.set("useNativeTitlebar", isWindow() ? false : true);
}

export default store;
