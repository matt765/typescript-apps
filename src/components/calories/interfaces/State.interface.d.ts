import { Gender } from '../types/Gender.type'
import { Errors } from './Errors.interface'

export interface State {
    isImperial: boolean
    age: string
    gender: Gender
    height: string
    weight: string
    activity: string
    BMR: string | null
    AMR: string | null
    errors: Errors
}
