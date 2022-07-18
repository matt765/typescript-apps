import * as React from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel, Text,
  Input, InputGroup, InputRightAddon,
  Switch
} from '@chakra-ui/react'
import { calcBMI } from '../utils/calcBMI'

export const BmiForm = () => {
  const [isImperial, setIsImperial] = React.useState(false)
  const [height, setHeight] = React.useState('')
  const [weight, setWeight] = React.useState('')
  const [bmi, setBmi] = React.useState('')

  const changeWeight = (e: React.ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)
  const changeHeight = (e: React.ChangeEvent<HTMLInputElement>) => setHeight(e.target.value)

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
    <Flex flexDirection={'column'} gap={4}
      w={'100%'}
      mx={'auto'} my={4} as={'form'}
      onSubmit={onSubmit}
    >
      <Flex alignItems={'center'}
        mx={'auto'}
        gap={2}>
                metric
        <Switch id="toggle-imperial"
          _checked={{ '> span': { bgGradient: 'linear(to-l, #00d2ff, #3a7bd5)' } }}
          checked={isImperial}
          onChange={() => setIsImperial(!isImperial)}
        />
                imperial
      </Flex>
      <FormControl as="fieldset">
        <FormLabel
          as="legend">Height</FormLabel>
        <InputGroup>
          <Input
            placeholder={'Input your height'}
            type={'number'}
            value={height}
            onChange={changeHeight}
          />
          {/* eslint-disable-next-line react/no-children-prop */}
          <InputRightAddon children={
            <p>{isImperial ? 'in' : 'cm'}</p>}/>
        </InputGroup>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel
          as="legend">Weight</FormLabel>
        <InputGroup>
          <Input
            placeholder={'Input your weight'}
            type={'number'}
            value={weight}
            onChange={changeWeight}
          />
          {/* eslint-disable-next-line react/no-children-prop */}
          <InputRightAddon children={
            <p>{isImperial ? 'lb' : 'kg'}</p>}/>
        </InputGroup>
      </FormControl>
      <Button variant={'primary'} mt={4}
        type={'submit'}
      >Calculate</Button>
      {bmi &&
                <Flex alignItems={'center'} justifyContent={'center'}
                  flexDirection={'column'}>
                  <Text fontSize={'4xl'}>Your
                        BMI</Text>
                  <Text fontSize={'2xl'}>{bmi}</Text></Flex>
      }
    </Flex>
  )
}

