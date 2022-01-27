import { request } from "./request";

export function gethomemultidate() {
    return request({
        url: '/home/multidata'
    })
}