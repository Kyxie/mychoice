import { Input, Select, VStack, FormControl, FormErrorMessage } from '@chakra-ui/react'

export default function ItemForm({ item, setItem, errors = {} }) {
  return (
    <VStack spacing={4} align="stretch">
      <FormControl isInvalid={!!errors.name}>
        <Input
          placeholder="Item Name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />
        {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
      </FormControl>
      <Select
        value={item.group}
        onChange={(e) => setItem({ ...item, group: e.target.value })}
      >
        <option value="Primary">Primary</option>
        <option value="Secondary">Secondary</option>
      </Select>
    </VStack>
  )
}