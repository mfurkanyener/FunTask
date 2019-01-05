import {CLIENT_KEY} from "../config/config";

export function FetchData(url = null) {
    return new Promise(function (res, rej) {
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "client-key": CLIENT_KEY
            }
        })
            .then(resp => resp.json())
            .then(function (data) {

                console.log('data', data)
                return res(data);
            })
            .catch(error => {
                return rej(error)
            });
    })
}

export function PostData(url = null, method = null, data = null) {
    return new Promise(function (res, rej) {
        fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(resp => resp.json()).then(function (data) {
            return res(data)
        }).catch(error => {
            return rej(error)
        });
    })
}