import React from 'react'
import { Container, Row, Col, Card, Badge, ListGroup, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

export default function RecipeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const mockRecipe = {
    id: parseInt(id),
    title: 'Copycat Garlic Noodles',
    isCopycat: true,
    copycatOf: 'Campus Deli Signature Noodles',
    difficulty: 'Easy',
    time: '20 minutes',
    complexity: 'Beginner-friendly with basic pantry ingredients',
    cuisine: 'Asian Fusion',
    restaurantsWithDish: [
      { name: 'Noodle House', price: '$$' },
      { name: 'Campus Deli', price: '$' }
    ],
    ingredients: [
      '8 oz spaghetti',
      '4 cloves garlic, minced',
      '3 tbsp soy sauce',
      '2 tbsp sesame oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook pasta according to package directions. Drain and set aside.',
      'Heat sesame oil in a large pan over medium heat.',
      'Add minced garlic and sauté for 1 minute until fragrant.',
      'Add cooked pasta and soy sauce. Toss until well combined.',
      'Season with salt and pepper. Serve hot.'
    ],
    reviews: []
  }

  return (
    <Container>
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        ← Back
      </Button>

      <Row>
        <Col md={8}>
          <h1>{mockRecipe.title}</h1>

          {mockRecipe.isCopycat && (
            <div className="alert alert-info mb-3">
              <Badge bg="success">⭐ Copycat Recipe</Badge>
              <p className="mt-2">This is a copycat of: <strong>{mockRecipe.copycatOf}</strong></p>
            </div>
          )}

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Recipe Details</Card.Title>
              <p><strong>Time to Prepare:</strong> {mockRecipe.time}</p>
              <p><strong>Difficulty:</strong> {mockRecipe.difficulty}</p>
              <p><strong>Complexity:</strong> {mockRecipe.complexity}</p>
              <p><strong>Cuisine:</strong> {mockRecipe.cuisine}</p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Ingredients</Card.Title>
              <ListGroup variant="flush">
                {mockRecipe.ingredients.map((ingredient, idx) => (
                  <ListGroup.Item key={idx}>{ingredient}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Instructions</Card.Title>
              <ol>
                {mockRecipe.instructions.map((instruction, idx) => (
                  <li key={idx} className="mb-2">{instruction}</li>
                ))}
              </ol>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Find This Dish At</Card.Title>
              <ListGroup variant="flush">
                {mockRecipe.restaurantsWithDish.map((restaurant, idx) => (
                  <ListGroup.Item key={idx}>
                    <strong>{restaurant.name}</strong><br />
                    <small className="text-muted">Price: {restaurant.price}</small>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Reviews</Card.Title>
              <p className="text-muted">No reviews yet. Be the first to review!</p>
              <Button variant="primary" size="sm">Leave a Review</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
