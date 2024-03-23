export const longNumber = (number, max=99) => {
    if (number <= max) return number;
    return "+" + max;
}
