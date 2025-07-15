import { useEffect, useState } from 'react'
import { fetchItems, deleteItem } from '../api/items'
import { Link } from 'react-router-dom'
import {
  Box,
  Heading,
  Button,
  List,
  ListItem,
  Flex,
  Text,
  Spacer,
} from '@chakra-ui/react'

export default function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems().then(setItems)
  }, [])

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      await deleteItem(id)
      setItems(items.filter(item => item.id !== id))
    }
  }

  return (
    <Box p={6} maxW="800px" mx="auto">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="md">Items</Heading>
        <Button as={Link} to="/create" colorScheme="blue">
          + Add Item
        </Button>
      </Flex>
      <List spacing={3}>
        {items.map(item => (
          <ListItem
            key={item.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
          >
            <Flex align="center">
              <Box>
                <Text fontWeight="bold">{item.name}</Text>
                <Text fontSize="sm" color="gray.500">{item.group}</Text>
                <Text fontSize="xs" color="gray.400">
                  Created: {new Date(item.created_at).toLocaleString()}
                </Text>
                <Text fontSize="xs" color="gray.400">
                  Updated: {new Date(item.updated_at).toLocaleString()}
                </Text>
              </Box>
              <Spacer />
              <Button
                size="sm"
                colorScheme="teal"
                as={Link}
                to={`/items/${item.id}`}
                mr={2}
              >
                Edit
              </Button>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}