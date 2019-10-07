import {mapDOM} from "./mapDOM";

export const convertReceivedData = ({data}) => {
    return data.map((temp) => {
        temp.dom_model = mapDOM(temp.template, false);
        console.log(temp.dom_model);
        return temp;
    });
};