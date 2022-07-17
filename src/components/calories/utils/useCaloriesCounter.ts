import * as React from 'react'
import { useReducer } from 'react'
import { calcBMR } from './calcBMR'
import { calcAMR } from './calcAMR'
import { Errors } from '../interfaces/Errors.interface'
import { ErrorKey } from '../types/ErrorKey.type'
import { Gender } from '../types/Gender.type'
import { caloriesReducer } from '../reducers/caloriesReducer'

export const useCaloriesCounter = () => {
  const initialState = {
    errors: {
      age: false,
      gender: false,
      height: false,
      weight: false,
      activity: false
    },
    AMR: null,
    BMR: null,
    isImperial: false,
    age: '',
    gender: 'male' as Gender,
    height: '',
    weight: '',
    activity: ''
  }

  const [{
    age,
    gender,
    activity,
    height,
    weight,
    isImperial,
    errors,
    BMR,
    AMR
  }, dispatch] = useReducer(caloriesReducer, initialState)

  const setAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({
      ...errors,
      age: false
    })

    return dispatch({
      type: 'setAge',
      age: e.target.value
    })
  }
  const setGender = (nextValue: string) => {
    setErrors({
      ...errors,
      gender: false
    })

    dispatch({
      type: 'setGender',
      gender: nextValue as Gender
    })
  }
  const setHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({
      ...errors,
      height: false
    })

    dispatch({
      type: 'setHeight',
      height: e.target.value
    })
  }
  const setWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({
      ...errors,
      weight: false
    })

    dispatch({
      type: 'setWeight',
      weight: e.target.value
    })
  }
  const setActivity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setErrors({
      ...errors,
      activity: false
    })

    dispatch({
      type: 'setActivity',
      activity: e.target.value
    })
  }
  const setAMRandBMR = ({
    AMR, BMR
  }: { AMR: string, BMR: string }) => dispatch({
    type: 'setAMRandBMR',
    AMR,
    BMR
  })
  const setErrors = (errors: Errors) => dispatch({
    type: 'setErrors',
    errors
  })
  const toggleImperial = () => dispatch({ type: 'toggleImperial' })

  const calculate = (e: React.FormEvent) => {
    e.preventDefault()

    Object.entries({
      age,
      height,
      weight,
      gender,
      activity
    }).forEach((value) => {
      if (!value[1].length) {
        const newErrors = errors
        newErrors[value[0] as ErrorKey] = true
        setErrors(newErrors)
      } else {
        const newErrors = errors
        newErrors[value[0] as ErrorKey] = false
        setErrors(newErrors)
      }
    })

    // eslint-disable-next-line no-magic-numbers
    if (Number(age) < 1 || Number(age) > 105) {
      setErrors({
        ...errors,
        age: true
      })
    }
    // eslint-disable-next-line no-magic-numbers
    if (Number(height) < 1 || Number(height) > 220) {
      setErrors({
        ...errors,
        height: true
      })
    }
    if (Number(weight) < 1) {
      setErrors({
        ...errors,
        weight: true
      })
    }

    if (!errors.age && !errors.weight && !errors.height &&
            !errors.gender && !errors.activity) {
      const BMR = calcBMR({
        age,
        height,
        weight,
        gender,
        isImperial
      })

      const AMR = calcAMR({
        BMR,
        activity
      })

      setAMRandBMR({
        AMR,
        BMR
      })
    }
  }

  return {
    setAge,
    setGender,
    setHeight,
    setWeight,
    setActivity,
    toggleImperial,
    isImperial,
    calculate,
    age,
    gender,
    height,
    weight,
    activity,
    errors,
    BMR,
    AMR
  }
}
