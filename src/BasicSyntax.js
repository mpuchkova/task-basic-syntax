export function romanToInteger(str) {
    let result = 0;
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < str.length; i++) {
        const current = values[str[i]];
        const right = values[str[i + 1]];
        if (current < right) {
            i++;
            result += right - current;
        } else {
            result += current;
        }
    }

    return result;
}
