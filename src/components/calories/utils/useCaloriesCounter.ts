import * as React from 'react'
import { useReducer } from 'react'
import { calcBMR } from './calcBMR'
import { calcAMR } from './calcAMR'

interface State {
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

interface Errors {
    age: boolean
    gender: boolean
    height: boolean
    weight: boolean
    activity: boolean
}

type ErrorKey =
    | 'age'
    | 'gender'
    | 'height'
    | 'weight'
    | 'activity'

export type Gender = 'male' | 'female' | ''

type Action =
    | { type: 'setAge', age: string }
    | { type: 'setGender', gender: Gender }
    | { type: 'setHeight', height: string }
    | { type: 'setWeight', weight: string }
    | { type: 'setActivity', activity: string }
    | { type: 'setAMRandBMR', AMR: string, BMR: string }
    | { type: 'setErrors', errors: Errors }
    | { type: 'toggleImperial' }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'setActivity': {
      return {
        ...state,
        activity: action.activity
      }
    }
    case 'setAge': {
      return {
        ...state,
        age: action.age
      }
    }
    case 'setGender': {
      return {
        ...state,
        gender: action.gender
      }
    }
    case 'setHeight': {
      return {
        ...state,
        height: action.height
      }
    }
    case 'setWeight': {
      return {
        ...state,
        weight: action.weight
      }
    }
    case 'setAMRandBMR': {
      return {
        ...state,
        BMR: action.BMR,
        AMR: action.AMR
      }
    }
    case 'setErrors': {
      return {
        ...state,
        errors: action.errors
      }
    }
    case 'toggleImperial': {
      return {
        ...state,
        isImperial: !state.isImperial
      }
    }
    default:
      return state
  }
}

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
  }, dispatch] = useReducer(reducer, initialState)

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
        gender
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
