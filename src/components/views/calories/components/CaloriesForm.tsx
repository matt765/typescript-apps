import * as React from 'react' // Added React
import styles from '../styles/CaloriesForm.module.scss' // Added

import { TransparentButton } from '../../../buttons/TransparentButton'
import { useCaloriesCounter } from '../utils/useCaloriesCounter'

export const CaloriesForm = () => {
  const {
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
    errors
  } = useCaloriesCounter()

  return (
    <form
      className={styles.caloriesForm} // Changed from Flex, as="form"
      onSubmit={(e) => {
        e.preventDefault() // Prevent default form submission
        calculate(e) // Pass event to calculate
      }}
    >
      <div className={styles.unitSwitchContainer}> {/* Changed from Flex */}
        <span className={styles.primaryText}>Metric</span> {/* Changed from Text */}
        <label className={styles.switch}> {/* Custom switch implementation */}
          <input
            type="checkbox"
            id="use-geolocation" // Kept id for potential label association if needed
            checked={isImperial}
            onChange={toggleImperial} // Directly pass toggleImperial
          />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <span className={styles.primaryText}>Imperial</span> {/* Changed from Text */}
      </div>
      <fieldset> {/* Removed styles.formControl as it was empty */}
        <legend className={styles.inputLabel}> {/* Changed from FormLabel and Text */}
          Age
        </legend>
        <input
          type="number"
          placeholder="Input your age"
          onChange={setAge} // Pass event directly
          value={age}
          required
          className={`${styles.inputField} ${errors.age ? styles.invalid : ''}`} // Changed from Input
        />
      </fieldset>
      <fieldset> {/* Removed styles.formControl */}
        <legend className={styles.inputLabel}> {/* Changed from FormLabel and Text */}
          Gender
        </legend>
        {/* Changed from RadioGroup and HStack */}
        <div className={styles.radioGroupContainer}>
          <label className={styles.radioLabel}>
            <input type="radio" value="male" name="gender" checked={gender === 'male'} onChange={() => setGender('male')} />
            Male
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" value="female" name="gender" checked={gender === 'female'} onChange={() => setGender('female')} />
            Female
          </label>
        </div>
      </fieldset>
      <fieldset> {/* Removed styles.formControl */}
        <legend className={styles.inputLabel}> {/* Changed from FormLabel and Text */}
          Height
        </legend>
        <div className={styles.inputGroup}> {/* Changed from InputGroup */}
          <input
            placeholder="Input your height"
            onChange={setHeight} // Pass event directly
            value={height}
            type="number"
            required
            className={`${styles.inputField} ${errors.height ? styles.invalid : ''}`} // Changed from Input
          />
          <span className={styles.inputRightAddon}>{isImperial ? 'in' : 'cm'}</span> {/* Changed from InputRightAddon and Text */}
        </div>
      </fieldset>
      <fieldset> {/* Removed styles.formControl */}
        <legend className={styles.inputLabel}> {/* Changed from FormLabel and Text */}
          Weight
        </legend>
        <div className={styles.inputGroup}> {/* Changed from InputGroup */}
          <input
            placeholder="Input your weight"
            value={weight}
            onChange={setWeight} // Pass event directly
            type="number"
            required
            className={`${styles.inputField} ${errors.weight ? styles.invalid : ''}`} // Changed from Input
          />
          <span className={styles.inputRightAddon}>{isImperial ? 'lb' : 'kg'}</span> {/* Changed from InputRightAddon and Text */}
        </div>
      </fieldset>
      <fieldset className={styles.breakWord}> {/* Removed styles.formControl, kept breakWord */}
        <legend className={styles.inputLabel}> {/* Changed from FormLabel and Text */}
          Activity
        </legend>
        <select
          onChange={setActivity} // Pass event directly
          value={activity}
          required
          className={`${styles.selectField} ${errors.activity ? styles.invalid : ''}`} // Changed from Select
        >
          <option value="" disabled hidden>Select option</option> {/* Corrected placeholder for select */}
          <option value="1">Basic metabolic rate</option>
          <option value="1.2">Sedentary: little/no exercise</option>
          <option value="1.375">Light: exercise 1-3 times/week</option>
          <option value="1.55">Moderate: exercise 4-5 times/week</option>
          <option value="1.725">
            Active: daily exercise or intense 3/4 times/week
          </option>
          <option value="1.9">
            Very active: intense exercise 6/7 times/week
          </option>
          <option value="2.2">
            Extra active: very intense exercise daily or physical job
          </option>
        </select>
      </fieldset>
      <div className={styles.buttonContainer}> {/* Changed from Flex */}
        <TransparentButton text="Calculate" type="submit" />
      </div>
      {Object.values(errors).some((value) => value === true) &&
        <div className={styles.errorMessage}> {/* Changed from Center and Text */}
          Some of the values are invalid
        </div>
      }
    </form>
  )
}
