export const getFormattedSize = (bytes) => {
    if (typeof bytes !== 'number' || isNaN(bytes) || bytes < 0) {
        return '0 Kb'; // or throw an error if invalid input
    }

    const megabytes = bytes / (1000 * 1000);
    if (megabytes >= 1) {
        return `${megabytes.toFixed(2)} Mb`;
    } else {
        const kilobytes = bytes / 1000;
        return `${kilobytes.toFixed(2)} Kb`;
    }
};