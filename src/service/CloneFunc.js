export default async function cloneFunc(someObjectToClone) {
    let resultObject = {};

    await Object.assign(resultObject, someObjectToClone);

    return resultObject;
}
