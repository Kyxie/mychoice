import { useEffect, useState } from 'react'
import { fetchItems } from '../api/items'
import { Link } from 'react-router-dom'
import { Box, Heading, Button, List, ListItem } from '@chakra-ui/react'

export default function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems().then(res => setItems(res.data))
  }, [])

  return (
    <Box p={6}>
      <Heading mb={4}>Items</Heading>
      <Button as={Link} to="/create" colorScheme="blue" mb={4}>
        Create New Item
      </Button>
      <List spacing={3}>
        {items.map(item => (
          <ListItem key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name} ({item.group})</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
