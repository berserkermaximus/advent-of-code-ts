import fs from "fs"

function count_calories(filename: fs.PathOrFileDescriptor) {
    // read the file
    const data = fs.readFileSync(filename, 'utf-8');
    const elves_items = data.split("\r\n\r");
    // console.log(elves_items);
    var total: number[] = []
    for (var elf of elves_items) {
        // remove newlines, then split by return character, convert it into numbers and sum it up
        const total_calories = elf.replace(/(\n)/g, "").split("\r").map((group) => Number(group)).reduce((x, y) => x + y)
        total.push(total_calories)
    }
    // console.log(total)
    return Math.max(...total)

}

console.log(count_calories("day01/input.txt"))