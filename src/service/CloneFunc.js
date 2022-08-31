export default async function cloneFunc(someObjectToClone){
    let resultObject = new Object();

    await Object.assign(resultObject, someObjectToClone);

    return resultObject;
}
