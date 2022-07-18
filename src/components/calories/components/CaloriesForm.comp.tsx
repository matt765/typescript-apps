import React from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Radio,
  RadioGroup, Select,
  Switch
} from '@chakra-ui/react'
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

  return <Flex flexDirection={'column'} gap={4}
    w={'80%'}
    mx={'auto'} my={4} as={'form'}
    onSubmit={calculate}
  >
    <Flex alignItems={'center'}
      mx={'auto'}
      gap={2}>
            metric
      <Switch id="use-geolocation"
        isChecked={isImperial}
        onChange={toggleImperial}
        _checked={{ '> span': { bgGradient: 'linear(to-l, #00d2ff, #3a7bd5)' } }}/>
            imperial
    </Flex>
    <FormControl as="fieldset">
      <FormLabel
        as="legend">Age</FormLabel>
      <Input type={'number'}
        placeholder={'Input your age'}
        onChange={setAge}
        value={age}
        isInvalid={errors.age}
      />

    </FormControl>
    <FormControl as="fieldset">
      <FormLabel
        as="legend">Gender</FormLabel>
      <RadioGroup value={gender}
        onChange={setGender}
        defaultValue={'male'}
      >
        <HStack spacing="24px">
          <Radio
            value="male">Male</Radio>
          <Radio
            value="female">Female</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
    <FormControl as="fieldset">
      <FormLabel
        as="legend">Height</FormLabel>
      <InputGroup>
        <Input
          placeholder={'Input your height'}
          onChange={setHeight}
          value={height}
          type={'number'}
          isInvalid={errors.height}
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
          value={weight}
          onChange={setWeight}
          type={'number'}
          isInvalid={errors.weight}
        />
        {/* eslint-disable-next-line react/no-children-prop */}
        <InputRightAddon children={
          <p>{isImperial ? 'lb' : 'kg'}</p>}/>
      </InputGroup>
    </FormControl>
    <FormControl as="fieldset"
      sx={{ wordBreak: 'break-all' }}>
      <FormLabel
        as="legend">Activity</FormLabel>
      <Select
        placeholder="Select option"
        onChange={setActivity}
        value={activity}
        isInvalid={errors.activity}
      >
        <option value="1">Basic
                    metabolic rate
        </option>
        <option
          value="1.2">Sedentary:
                    little/no
                    exercise
        </option>
        <option value="1.375">Light:
                    exercise 1-3
                    times/week
        </option>
        <option
          value="1.55">Moderate:
                    exercise 4-5
                    times/week
        </option>
        <option
          value="1.725">Active:
                    daily exercise
                    or intense 3/4
                    times/week
        </option>
        <option value="1.9">Very
                    active:
                    intense
                    exercise 6/7 times/week
        </option>
        <option value="2.2">Extra
                    active: very
                    intense exercise daily
                    or
                    physical job
        </option>
      </Select>
    </FormControl>
    <Button variant={'primary'} mt={4}
      type={'submit'}
    >Calculate</Button>
  </Flex>
}

