export function rangeSum(start, end) {
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

export function iterationCount(a) {
    let count = 0;
    while (a > 0.1) {
        a = a / 2;
        count++;
    }
    return count;
}

export function symbolsReplace(message) {
    if (message.length === 0) {
        return message;
    }
    const chars = message.split('');
    let i = 0;
    do {
        if ((i + 1) % 3 === 0) {
            chars[i] = '_';
        }
        i++;
    } while (i < chars.length);
    return chars.join('');
}
