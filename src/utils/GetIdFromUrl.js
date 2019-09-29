export const GetIdFromUrl = (string, data) => {
    let number = parseInt(string);
    let item = data.find(({id}) => id === number);

    return item;
}