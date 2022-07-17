import { Gender } from './Gender.type'
import { Errors } from '../interfaces/Errors.interface'

export type Action =
    | { type: 'setAge', age: string }
    | { type: 'setGender', gender: Gender }
    | { type: 'setHeight', height: string }
    | { type: 'setWeight', weight: string }
    | { type: 'setActivity', activity: string }
    | { type: 'setAMRandBMR', AMR: string, BMR: string }
    | { type: 'setErrors', errors: Errors }
    | { type: 'toggleImperial' }
