import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export async function isSet(key: string) {
  const ret = await Storage.get({ key: key });
  return (
    ret.value != "undefined" &&
    ret.value != null &&
    ret.value != "[]" &&
    ret.value.length != null &&
    ret.value.length > 0
  );
}

export async function getPageValues(
  type: string,
  apiFct: Function,
  setterFct: Function
) {
  const dataInCache = await isSet(type);
  if (dataInCache) {
    console.log("Deja en cache");

    let storage = await getStorage(type);
    setterFct(storage);
  } else {
    console.log("pas en cache");
    apiFct(setterFct);
  }
}

export async function getPageValue(
  type: string,
  id: string,
  apiFct: Function,
  setterFct: Function
) {
  const dataInCache = await isSet(type);
  if (dataInCache) {
    console.log("Deja en cache");

    let storage = await getStorage(type);
    setterFct(storage[id]);
  } else {
    console.log("pas en cache");
    apiFct(setterFct, id);
  }
}

export async function getStorage(key: string) {
  const ret = await Storage.get({ key: key });
  if (ret.value) {
    let storage = JSON.parse(ret.value);
    return storage;
  }
  return null;
}

export async function setStorage(obj: Object, key: string) {
  await Storage.set({
    key: key,
    value: JSON.stringify(obj),
  });
}
