import { Gender } from '../types/Gender.type'

export interface CalcBMR {
    age: string;
    weight: string;
    height: string;
    gender: Gender,
    isImperial: boolean
}
