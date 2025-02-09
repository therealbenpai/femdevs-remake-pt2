import barcode from '@bwip-js/node';

export default defineEventHandler(async (event) => {
    const { codec, content, fmt } = getQuery(event) as Partial<Record<string, string>>;
    const config: barcode.RenderOptions = {
        bcid: codec!,
        text: content!,
        scale: 3,
        includetext: true,
        textxalign: 'center',
        textsize: 16,
        textyoffset: 10,
        paddingheight: 2,
        paddingwidth: 2,
        backgroundcolor: 'FFFFFF',
        barcolor: '000000',
    };
    try {
        return fmt === 'svg' ? barcode.toSVG(config) : await barcode.toBuffer(config);
    } catch (err) {
        return createError({
            status: 500,
            statusMessage: 'Internal Server Error',
        });
    }
});