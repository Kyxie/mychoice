import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchItem, updateItem } from '../api/items'
import { Box, Heading, Button, Text, useToast } from '@chakra-ui/react'
import ItemForm from '../components/ItemForm'

export default function ItemDetails() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const navigate = useNavigate()
  const toast = useToast()

  useEffect(() => {
    fetchItem(id).then(setItem)
  }, [id])

  const handleUpdate = async () => {
    try {
      await updateItem(id, item)
      toast({
        title: 'Item updated',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navigate('/')
    } catch (e) {
      toast({
        title: 'Update failed',
        description: e.toString(),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  if (!item) return <Box p={6}>Loading...</Box>

  return (
    <Box p={6} maxW="500px" mx="auto">
      <Heading mb={4}>Edit Item</Heading>
      <ItemForm item={item} setItem={setItem} />
      <Text fontSize="xs" color="gray.500" mt={2}>
        Created: {new Date(item.created_at).toLocaleString()}
      </Text>
      <Text fontSize="xs" color="gray.500">
        Updated: {new Date(item.updated_at).toLocaleString()}
      </Text>
      <Button mt={4} onClick={handleUpdate} colorScheme="teal">
        Update
      </Button>
    </Box>
  )
}