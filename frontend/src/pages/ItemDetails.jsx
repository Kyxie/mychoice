import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchItem, updateItem } from '../api/items'
import { Box, Input, Select, Button, Heading } from '@chakra-ui/react'

export default function ItemDetail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchItem(id).then(res => setItem(res.data))
  }, [id])

  const handleUpdate = async () => {
    try {
      await updateItem(id, item)
      navigate('/')
    } catch (e) {
      alert('Update failed: ' + e.response?.data?.detail || e.message)
    }
  }

  if (!item) return <Box p={6}>Loading...</Box>

  return (
    <Box p={6}>
      <Heading mb={4}>Edit Item</Heading>
      <Input value={item.name} onChange={e => setItem({ ...item, name: e.target.value })} mb={3} />
      <Select value={item.group} onChange={e => setItem({ ...item, group: e.target.value })} mb={3}>
        <option value="Primary">Primary</option>
        <option value="Secondary">Secondary</option>
      </Select>
      <Button onClick={handleUpdate} colorScheme="teal">Update</Button>
    </Box>
  )
}
