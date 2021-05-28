import React from 'react';
import ApiAirtableManager from "../utils/ApiAirtableManager";

export default async function getBooks() {
    let offset = '' ;
    let books = [];
    do {
        let tmp = await ApiAirtableManager.parseResponse(await ApiAirtableManager.apiFetch('/app7OSRjBz0OP6Z1s/Livres?offset=' + offset));
        tmp.records.forEach(r => books.push(r));
        offset = (tmp.offset !== undefined) ? tmp.offset : ''
    } while (offset !== '');

    return books;
}
