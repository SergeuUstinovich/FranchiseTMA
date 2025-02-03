import { AxiosResponse } from "axios"

export function validateResponse(response: AxiosResponse) {
    if(response.status !== 200) {
        throw new Error(response.data.Info)
    }
    return response
}