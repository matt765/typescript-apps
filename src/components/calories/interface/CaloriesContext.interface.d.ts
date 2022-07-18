import * as React from 'react'
import { Gender } from '../types/Gender.type'
import { Errors } from '../interfaces/Errors.interface'

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
