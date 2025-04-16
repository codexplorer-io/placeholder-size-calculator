export const getFitSize = ({
    sourceWidth,
    sourceHeight,
    maxWidth,
    maxHeight
}) => {
    const percentWidth = maxWidth / sourceWidth;
    const percentHeight = maxHeight / sourceHeight;
    const percent = percentHeight < percentWidth ? percentHeight : percentWidth;
    return {
        width: sourceWidth * percent,
        height: sourceHeight * percent
    };
};

export const getFitWidth = ({
    sourceWidth,
    sourceHeight,
    maxHeight
}) => getFitSize({
    sourceWidth,
    sourceHeight,
    maxWidth: Number.MAX_SAFE_INTEGER,
    maxHeight
}).width;

export const getFitHeight = ({
    sourceWidth,
    sourceHeight,
    maxWidth
}) => getFitSize({
    sourceWidth,
    sourceHeight,
    maxWidth,
    maxHeight: Number.MAX_SAFE_INTEGER
}).height;
