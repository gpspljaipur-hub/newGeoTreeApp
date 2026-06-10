/** Uppercases the first character; empty or missing input returns an empty string. */
export function capitalizeFirst(text?: string | null): string {
    if (text == null || text === '') return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Formats large counts as compact strings (e.g. 1500 → "1.5K"). */
export function formatCapacity(value: number): string {
    if (value >= 1000) {
        return (value / 1000).toFixed(1).replace('.0', '') + 'K';
    }
    return value.toString();
}
