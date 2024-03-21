export const longText = (text, maxChars = 40) => {
    if (text.length <= maxChars) return text;
    return text.substring(0, maxChars) + "..."
}
