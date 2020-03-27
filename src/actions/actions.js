// action type
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const BUY_ITEM = 'BUY_ITEM';

// action creator
export function removeFeature(feature) {
    console.log(feature);
    return {
        type: REMOVE_FEATURE,
        payload: feature
    };
}

export function buyItem(item) {
    console.log(item);
    return {
        type: BUY_ITEM,
        payload: item
    };
}
