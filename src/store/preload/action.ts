import { Dispatch } from "redux";
import { FetchUsersFunction } from "../user/action";

export async function PreloadFunction(dispatch: Dispatch): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            FetchUsersFunction(dispatch).catch(err => {return reject(err);});
        }, 1000);
        return resolve('Preload done');
    });
}