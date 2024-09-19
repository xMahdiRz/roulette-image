declare function createRouletteGifImage(sectors: any[], return_stream?: boolean): Promise<any>;
declare function createRouletteImage(sectors: any[], return_ctx?: boolean, pointer?: boolean, specific_win_avatar?: string): Promise<any>;
declare function getRandomNumber(length: number, excludedNumbers?: number[]): number;
declare function getRandomDarkHexCode(): string;
declare function shuffleArray(arr: any[], specific_num?: number): any[];
export { createRouletteGifImage, shuffleArray, getRandomDarkHexCode, createRouletteImage, getRandomNumber };
