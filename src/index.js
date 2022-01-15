module.exports = function toReadable(number) {
    const n = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return n[number];
    }

    if (number < 100) {
        if (number % 10 == 0) {
            return tens[Math.floor(number / 10)];
        } else {
            return tens[Math.floor(number / 10)] + ' ' + n[number % 10];
        }
    }

    if (number < 1000) {
        if (number % 100 == 0) {
            return n[Math.floor(number / 100)] + ' hundred';
        } else {
            return (n[Math.floor(number / 100)] + ' hundred ' + toReadable(number % 100));
        }
    }
    return number;
}
