import axios, { AxiosResponse } from "axios";
//import { getAccessToken } from "src/cat-auth/user-manager";


function getAccessToken() {return "";}

export async function fetchGET<T>(url: string): Promise<AxiosResponse<T>>{

    const accessToken = await getAccessToken();

    const resp = await axios.get<T>(
        url,
        {
            timeout: 5*1000,
            headers: {
                "Cache-Control": "no-cache",
                ...(accessToken && { "Authorization": `Bearer ${accessToken}` })
            },
        }
    );

    return resp;
}

export async function fetchPUT<T>(url: string, payload: unknown): Promise<AxiosResponse<T>> {

    const accessToken = await getAccessToken();

    const resp = await axios.put<T>(
        url,
        payload,
        {
            timeout: 10*1000,
            headers: {
                "Cache-Control": "no-cache",
                ...(accessToken && { "Authorization": `Bearer ${accessToken}` })
            },
        }
    );

    return resp;
}


export async function fetchPOST<T>(url: string, payload?: unknown): Promise<AxiosResponse<T>> {

    const accessToken = await getAccessToken();

    const resp = await axios.post<T>(
        url,
        payload,
        {
            timeout: 10*1000,
            headers: {
                "Cache-Control": "no-cache",
                ...(accessToken && { "Authorization": `Bearer ${accessToken}` })
            },
        }
    );

    return resp;
}
