export interface configInterface {
    emotionsMap: {};
    emotionsBaseUrl: string;
    silent: boolean;
}
export declare class WxEmotions {
    private configValue;
    constructor(config: any);
    config(config?: {}): configInterface;
    readonly emotionsIds: string[];
    readonly emotionsCount: number;
    readonly textToIdMap: Map<string, number>;
    readonly idToTextMap: Map<any, any>;
    readonly emotionSrcList: string[];
    private static handleId(id);
    private static hasEmotionsPattern(message);
    /**
     * 把字符串中的表情文字替换成表情图片
     * @param message
     * @returns {*}
     */
    parse(message: string): string;
    textToImage(text: string): string | never;
    idToText(id: string | number): string | never;
}
