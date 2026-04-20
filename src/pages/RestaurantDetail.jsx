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
    address: 'Unknown',
    image: null
  }

  return (
    <Container>
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        ← Back
      </Button>

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <h1 className="mb-3">{mockRestaurant.name}</h1>
              <p className="lead">{mockRestaurant.description}</p>
              
              <hr />
              
              <h5 className="mb-3">Restaurant Info</h5>
              <p><strong>Address:</strong> {mockRestaurant.address}</p>
              <p><strong>Cuisine:</strong> {mockRestaurant.cuisine}</p>
              <p><strong>Price Range:</strong> {mockRestaurant.price}</p>
              <p><strong>Rating:</strong> ⭐ {mockRestaurant.reputation}</p>
            </Card.Body>
          </Card>
        </Col>
        {mockRestaurant.image && (
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={mockRestaurant.image} alt={`${mockRestaurant.name} restaurant storefront and dining area`} style={{height: '250px', objectFit: 'cover'}} />
            </Card>
          </Col>
        )}
      </Row>

      <Row>
        <Col md={8}>
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
              <Card.Title>Menu Specials</Card.Title>
              <ListGroup variant="flush">
                {(mockRestaurant.signatureDishes || []).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    <strong>{item}</strong><br />
                    <small className="text-muted">{mockRestaurant.menuItemDescriptions?.[item] || 'A signature dish worth trying.'}</small>
                  </ListGroup.Item>
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
              <Button
                variant="primary"
                onClick={() => navigate('/submit', { state: { type: 'restaurant', id: mockRestaurant.id, name: mockRestaurant.name } })}
              >
                Leave a Review
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
