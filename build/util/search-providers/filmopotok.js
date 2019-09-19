"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
async function filmopotok(params) {
    const url = encodeURI(`http://filmpotok.ru/search/autocomplete/all/${params.title}`);
    let response;
    try {
        response = await rp.get(url);
    }
    catch (e) {
        return [];
    }
    const torrents = JSON.parse(response)[1];
    return Object.values(torrents)
        .filter((item) => item.href.startsWith('/film'))
        .map((item) => ({
        id: item.slug.slice(0, 40),
        title: item.value,
        year: item.label.match(/> \((\d{4})/)[1],
        posterUrl: item.label.match(/http:\/\/.*"/g)[0].slice(0, -1)
    }));
}
exports.filmopotok = filmopotok;
//# sourceMappingURL=../../../src/util/search-providers/filmopotok.js.map