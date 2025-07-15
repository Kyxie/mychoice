import { useState } from 'react'
import { createItem } from '../api/items'
import { Box, Heading, Button, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ItemForm from '../components/ItemForm'

export default function CreateItem() {
  const [item, setItem] = useState({ name: '', group: 'Primary' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const toast = useToast()

  const handleCreate = async () => {
    try {
      await createItem(item)
      toast({ title: 'Item created', status: 'success', duration: 3000, isClosable: true })
      navigate('/')
    } catch (e) {
      const msg = e.response?.data?.message || 'Creation failed'
      const fieldErrors = e.response?.data?.errors || {}
      setErrors(fieldErrors)
      toast({ title: 'Creation failed', description: typeof msg === 'string' ? msg : 'Invalid data', status: 'error', duration: 5000, isClosable: true })
    }
  }

  return (
    <Box p={6} maxW="500px" mx="auto">
      <Heading mb={4}>Create Item</Heading>
      <ItemForm item={item} setItem={setItem} errors={errors} />
      <Button mt={4} onClick={handleCreate} colorScheme="blue">Create</Button>
    </Box>
  )
}