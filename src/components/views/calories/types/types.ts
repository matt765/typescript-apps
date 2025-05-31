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

export type Gender = 'male' | 'female' | ''

// Errors
export type ErrorKey =
    | 'age'
    | 'gender'
    | 'height'
    | 'weight'
    | 'activity'

export interface Errors {
        age: boolean
        gender: boolean
        height: boolean
        weight: boolean
        activity: boolean
    }

// Actions
export type Action =
    | { type: 'setAge', age: string }
    | { type: 'setGender', gender: Gender }
    | { type: 'setHeight', height: string }
    | { type: 'setWeight', weight: string }
    | { type: 'setActivity', activity: string }
    | { type: 'setAMRandBMR', AMR: string, BMR: string }
    | { type: 'setErrors', errors: Errors }
    | { type: 'toggleImperial' }

// Utility functions
export interface CalcAMR {
    BMR: string
    activity: string
}

export interface CalcBMR {
    age: string;
    weight: string;
    height: string;
    gender: Gender,
    isImperial: boolean
}

// Context
export interface CaloriesContextInterface {
    setAge: (e: React.ChangeEvent<HTMLInputElement>) => void
    setGender: (nextValue: string) => void
    setHeight: (e: React.ChangeEvent<HTMLInputElement>) => void
    setWeight: (e: React.ChangeEvent<HTMLInputElement>) => void
    setActivity: (e: React.ChangeEvent<HTMLSelectElement>) => void
    toggleImperial: () => void
    isImperial: boolean
    calculate: (e: React.FormEvent) => void
    age: string
    gender: Gender
    height: string
    weight: string
    activity: string
    errors: Errors
    BMR: string | null
    AMR: string | null
}
