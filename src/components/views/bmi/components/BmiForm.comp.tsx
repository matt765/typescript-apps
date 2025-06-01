import * as React from 'react'

import { calcBMI } from '../utils/calcBMI'
import { TransparentButton } from '../../../buttons/TransparentButton'
import styles from '../styles/BmiForm.module.scss'

export const BmiFormComp = () => {
  const [isImperial, setIsImperial] = React.useState(false)
  const [height, setHeight] = React.useState('')
  const [weight, setWeight] = React.useState('')
  const [bmi, setBmi] = React.useState('')

  const changeWeight = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWeight(e.target.value)
  const changeHeight = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHeight(e.target.value)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const bmiValue = calcBMI({
      height,
      weight,
      isImperial
    })

    setBmi(bmiValue)
  }

  return (
    <form
      className={styles.bmiForm}
      onSubmit={onSubmit}
    >
      <div className={styles.switchContainer}>
        Metric
        <label className={styles.switch}>
          <input
            type="checkbox"
            id="toggle-imperial"
            checked={isImperial}
            onChange={() => setIsImperial(!isImperial)}
          />
          <span className={styles.slider}></span>
        </label>
        Imperial
      </div>
      <fieldset className={styles.formControl}>
        <legend className={styles.formLabel}>Height</legend>
        <div className={styles.inputGroup}>
          <input
            placeholder="Input your height"
            type="number"
            value={height}
            onChange={changeHeight}
            required
            className={styles.input}
          />
          <span className={styles.inputRightAddon}><p>{isImperial ? 'in' : 'cm'}</p></span>
        </div>
      </fieldset>
      <fieldset className={`${styles.formControl} ${styles.marginBottom}`}>
        <legend className={styles.formLabel}>Weight</legend>
        <div className={styles.inputGroup}>
          <input
            placeholder="Input your weight"
            type="number"
            value={weight}
            onChange={changeWeight}
            required
            className={styles.input}
          />
          <span className={styles.inputRightAddon}><p>{isImperial ? 'lb' : 'kg'}</p></span>
        </div>
      </fieldset>
      <TransparentButton text="Calculate" type="submit" />
      {bmi &&
        <div className={styles.resultContainer}>
          <p className={styles.resultHeading}>Your BMI</p>
          <p className={styles.resultValue}>{bmi}</p>
        </div>
      }
    </form>
  )
}
