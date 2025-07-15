import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createItem } from '../api/items'
import { Box, Input, Select, Button, Heading } from '@chakra-ui/react'

export default function CreateItem() {
  const [name, setName] = useState('')
  const [group, setGroup] = useState('Primary')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      await createItem({ name, group })
      navigate('/')
    } catch (e) {
      alert('Error creating item: ' + e.response?.data?.detail || e.message)
    }
  }

  return (
    <Box p={6}>
      <Heading mb={4}>Create New Item</Heading>
      <Input placeholder="Item Name" value={name} onChange={e => setName(e.target.value)} mb={3} />
      <Select value={group} onChange={e => setGroup(e.target.value)} mb={3}>
        <option value="Primary">Primary</option>
        <option value="Secondary">Secondary</option>
      </Select>
      <Button onClick={handleSubmit} colorScheme="teal">Submit</Button>
    </Box>
  )
}
