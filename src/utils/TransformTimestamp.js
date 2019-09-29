export const TransformTimestamp = (stamp) => {
    return new Date(stamp).toLocaleDateString() + ' ' + new Date(stamp).toLocaleTimeString()
};