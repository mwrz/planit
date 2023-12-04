import { useCallback } from "react";
import { useTickTickToken } from "../context/TickTickTokenContext";

export function useTickTickApi() {
    const { tickTickToken } = useTickTickToken();

    const tickTickRequest = useCallback((url: string, requestOptions: RequestInit, callback: Function) => {
        fetch(url, requestOptions).then(
            (response) => {
                const reader = response.body?.getReader();
                reader?.read().then(({ value }) => {
                    const decodedRepsonse = new TextDecoder().decode(value);
                    const responseObj = JSON.parse(decodedRepsonse);
                    console.log(responseObj)
                    callback(responseObj);
                });
            },
        );
    }, []);

    const authorizedTickTickRequest = useCallback((url: string, callback: Function) => {
        if (!!tickTickToken) {
            const headers = {
                headers: {
                    Authorization: `Bearer ${tickTickToken}`,
                },
            };
            tickTickRequest(url, headers, callback);
        }
    }, [tickTickRequest, tickTickToken]);

    return { tickTickRequest, authorizedTickTickRequest };
}