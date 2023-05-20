function fromJSONtoHTML(jsonString) {

    let array = JSON.parse(jsonString);
    let output = '<table>\n';
    let keys = Object.keys(array[0]);
    output += `\t<tr>`;
    for(let el of keys) {
        output += `<th>${escape(el)}</th>`;
    }
    output += `</tr>\n`;

    for(let i = 0; i < array.length; i++) {
        output += `\t<tr>`;
        for(let key of Object.keys(array[i])) {
            output += `<td>${escape(array[i][key])}</td>`;
        }
        output += `</tr>\n`;
    }
    output += '</table>';

    function escape(el) {
        return el
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt')
            .replace(/"/g, '&quot;')
            .replace(/ /g, '&nbsp;')
    }
    console.log(output);
}


fromJSONtoHTML(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`);