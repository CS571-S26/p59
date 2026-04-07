import React from 'react'
import { Container, Row, Col, Card, Badge, ListGroup, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { restaurants as sampleRestaurants } from '../data/sampleRestaurants'

export default function RestaurantDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const restaurant = sampleRestaurants.find((r) => String(r.id) === String(id))

  const mockRestaurant = restaurant || {
    id: parseInt(id),
    name: 'Unknown Restaurant',
    cuisine: 'Unknown',
    price: '$',
    vibe: [],
    reputation: null,
    popularItems: [],
    specials: [],
    description: 'No description available.',
    address: 'Unknown'
  }

  return (
    <Container>
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        ← Back
      </Button>

      <Row>
        <Col md={8}>
          <h1>{mockRestaurant.name}</h1>
          <p className="lead">{mockRestaurant.description}</p>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Restaurant Info</Card.Title>
              <p><strong>Address:</strong> {mockRestaurant.address}</p>
              <p><strong>Cuisine:</strong> {mockRestaurant.cuisine}</p>
              <p><strong>Price Range:</strong> {mockRestaurant.price}</p>
              <p><strong>Rating:</strong> ⭐ {mockRestaurant.reputation}</p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Vibes</Card.Title>
              <div>
                {(mockRestaurant.vibe || []).map((v, idx) => (
                  <Badge key={idx} bg="info" className="me-2 mb-2">{v}</Badge>
                ))}
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Popular Menu Items</Card.Title>
              <ListGroup variant="flush">
                {(mockRestaurant.popularItems || mockRestaurant.signatureDishes || []).map((item, idx) => (
                  <ListGroup.Item key={idx}>{item}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Specials</Card.Title>
              <ListGroup variant="flush">
                {(mockRestaurant.specials || []).map((special, idx) => (
                  <ListGroup.Item key={idx}>{special}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Reviews</Card.Title>
              <p className="text-muted">No reviews yet. Be the first to review!</p>
              <Button variant="primary">Leave a Review</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
