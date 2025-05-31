import * as React from 'react'
import {
  Flex,
  FormControl,
  FormLabel,
  Text,
  Input,
  InputGroup,
  InputRightAddon,
  Switch
} from '@chakra-ui/react'

import { calcBMI } from '../utils/calcBMI'
import { TransparentButton } from '../../../buttons/TransparentButton'

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

    const bmi = calcBMI({
      height,
      weight,
      isImperial
    })

    setBmi(bmi)
  }

  return (
    <Flex
      flexDirection="column"
      gap={4}
      w={{
        base: '90%',
        md: '25rem',
        xl: '25rem'
      }}
      mx="auto"
      my={4}
      as="form"
      onSubmit={onSubmit}
      justifyContent="center"
      alignItems="center"
    >
      <Flex alignItems="center" mx="auto" gap={2}>
        Metric
        <Switch
          id="toggle-imperial"
          _checked={{ '> span': { bg: 'blue.400' } }}
          checked={isImperial}
          onChange={() => setIsImperial(!isImperial)}
        />
        Imperial
      </Flex>
      <FormControl as="fieldset">
        <FormLabel as="legend">Height</FormLabel>
        <InputGroup>
          <Input
            placeholder="Input your height"
            type="number"
            value={height}
            onChange={changeHeight}
            required
            borderColor="inputBorder"
          />
          {/* eslint-disable-next-line react/no-children-prop */}
          <InputRightAddon children={<p>{isImperial ? 'in' : 'cm'}</p>} />
        </InputGroup>
      </FormControl>
      <FormControl as="fieldset" mb="1.5rem">
        <FormLabel as="legend">Weight</FormLabel>
        <InputGroup>
          <Input
            placeholder="Input your weight"
            type="number"
            value={weight}
            onChange={changeWeight}
            required
            borderColor="inputBorder"
          />
          {/* eslint-disable-next-line react/no-children-prop */}
          <InputRightAddon children={<p>{isImperial ? 'lb' : 'kg'}</p>} />
        </InputGroup>
      </FormControl>
      <TransparentButton text="Calculate" type="submit" />
      {bmi &&
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          mt="1rem"
          mb="3rem"
        >
          <Text fontSize="4xl">Your BMI</Text>
          <Text fontSize="2xl">{bmi}</Text>
        </Flex>
      }
    </Flex>
  )
}
