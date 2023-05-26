import {
  Action, State
} from '../types/types'

export function caloriesReducer(state: State, action: Action) {
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
