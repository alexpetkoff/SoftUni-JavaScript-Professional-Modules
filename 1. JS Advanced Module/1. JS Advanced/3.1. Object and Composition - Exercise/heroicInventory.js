function heroicInventory(array) {

    let result = [];
    for (let i = 0; i < array.length; i++) {

        let [name, level, items] = array[i].split(' / ');
        let allItems = items === undefined ? [] : items.split(', ');
        level = Number(level);
        let currentObj = {
            "name": name,
            "level": level,
            "items": [...allItems]
        };
        result.push(currentObj);
    }
    console.log(JSON.stringify(result));
}

heroicInventory(['Jake / 1000']);