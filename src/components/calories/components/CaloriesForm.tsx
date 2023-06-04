import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Text
} from '@chakra-ui/react'

import { TransparentButton } from '../../buttons/TransparentButton'
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
    <Flex
      flexDirection="column"
      gap={4}
      w="100%"
      mx="auto"
      my={4}
      as="form"
      pb="2rem"
      onSubmit={calculate}
    >
      <Flex alignItems="center" mx="auto" gap={2}>
        <Text variant="primaryText">Metric</Text>
        <Switch
          id="use-geolocation"
          isChecked={isImperial}
          onChange={toggleImperial}
          _checked={{ '> span': { bg: 'blue.400' } }}
        />
        <Text variant="primaryText">Imperial</Text>
      </Flex>
      <FormControl as="fieldset">
        <FormLabel as="legend">
          <Text variant="inputLabel">Age</Text>
        </FormLabel>
        <Input
          type="number"
          placeholder="Input your age"
          onChange={setAge}
          value={age}
          isInvalid={errors.age}
          required
          color="primaryText"
          borderColor="inputBorder"
          _placeholder={{ color: 'secondaryText' }}
        />
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">
          <Text variant="inputLabel">Gender</Text>
        </FormLabel>
        <RadioGroup value={gender} onChange={setGender} defaultValue="male">
          <HStack spacing="24px">
            <Radio value="male">
              <Text variant="inputLabel">Male</Text>
            </Radio>
            <Radio value="female">
              <Text variant="inputLabel">Female</Text>
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">
          <Text variant="inputLabel">Height</Text>
        </FormLabel>
        <InputGroup>
          <Input
            placeholder="Input your height"
            onChange={setHeight}
            value={height}
            type="number"
            isInvalid={errors.height}
            required
            borderColor="inputBorder"
            color="primaryText"
            _placeholder={{ color: 'secondaryText' }}
          />
          {/* eslint-disable-next-line react/no-children-prop */}
          <InputRightAddon children={<Text variant="inputLabel">{isImperial ? 'in' : 'cm'}</Text>} />
        </InputGroup>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">
          <Text variant="inputLabel">Weight</Text>
        </FormLabel>
        <InputGroup>
          <Input
            placeholder="Input your weight"
            value={weight}
            onChange={setWeight}
            type="number"
            isInvalid={errors.weight}
            required
            borderColor="inputBorder"
            color="primaryText"
            _placeholder={{ color: 'secondaryText' }}
          />
          {/* eslint-disable-next-line react/no-children-prop */}
          <InputRightAddon children={<Text variant="inputLabel">{isImperial ? 'lb' : 'kg'}</Text>} />
        </InputGroup>
      </FormControl>
      <FormControl as="fieldset" sx={{ wordBreak: 'break-all' }}>
        <FormLabel as="legend">
          <Text variant="inputLabel">Activity</Text>
        </FormLabel>
        <Select
          placeholder="Select option"
          onChange={setActivity}
          value={activity}
          isInvalid={errors.activity}
          required
          borderColor="inputBorder"
        >
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
        </Select>
      </FormControl>
      <Flex w="100%" justify="center" mt="1rem">
        <TransparentButton text="Calculate" type="submit" />
      </Flex>
      {Object.values(errors).some((value) => value === true) &&
        <Center>
          <Text color="red.300" mt="1rem">
            Some of the values are invalid
          </Text>
        </Center>
      }
    </Flex>
  )
}
