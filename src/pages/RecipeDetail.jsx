import React from 'react'
import { Container, Row, Col, Card, Badge, ListGroup, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { recipes as sampleRecipes } from '../data/sampleRecipes'

export default function RecipeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const recipe = sampleRecipes.find((r) => String(r.id) === String(id))

  const mockRecipe = recipe || {
    id: parseInt(id),
    title: 'Unknown Recipe',
    isCopycat: false,
    copycatOf: null,
    difficulty: 'Unknown',
    time: 'N/A',
    complexity: '',
    cuisine: recipe?.cuisine || 'Unknown',
    restaurantsWithDish: recipe?.restaurantsWithDish || [],
    ingredients: recipe?.ingredients || [],
    instructions: recipe?.instructions || [],
    reviews: []
  }

  const data = {
    id: mockRecipe.id,
    title: recipe?.name || mockRecipe.title,
    isCopycat: recipe?.isCopycat || mockRecipe.isCopycat,
    copycatOf: recipe?.copycatOf || mockRecipe.copycatOf,
    difficulty: recipe?.difficulty || mockRecipe.difficulty,
    time: recipe?.time || mockRecipe.time,
    complexity: recipe?.complexity || mockRecipe.complexity,
    cuisine: recipe?.cuisine || mockRecipe.cuisine,
    image: recipe?.image || null,
    restaurantsWithDish: recipe?.restaurantsWithDish || mockRecipe.restaurantsWithDish || [],
    ingredients: recipe?.ingredients || mockRecipe.ingredients || [],
    instructions: recipe?.instructions || mockRecipe.instructions || [],
    reviews: recipe?.reviews || mockRecipe.reviews || []
  }

  return (
    <Container>
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        ← Back
      </Button>

      <Row>
        <Col md={8}>
          <h1>{data.title}</h1>

          {data.isCopycat && (
            <div className="alert alert-info mb-3">
              <Badge bg="success">⭐ Copycat Recipe</Badge>
              <p className="mt-2">This is a copycat of: <strong>{data.copycatOf}</strong></p>
            </div>
          )}

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Recipe Details</Card.Title>
              <p><strong>Time to Prepare:</strong> {data.time}</p>
              <p><strong>Difficulty:</strong> {data.difficulty}</p>
              <p><strong>Complexity:</strong> {data.complexity}</p>
              <p><strong>Cuisine:</strong> {data.cuisine}</p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Ingredients</Card.Title>
              <ListGroup variant="flush">
                {data.ingredients.map((ingredient, idx) => (
                  <ListGroup.Item key={idx}>{ingredient}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Instructions</Card.Title>
              <ol>
                {data.instructions.map((instruction, idx) => (
                  <li key={idx} className="mb-2">{instruction}</li>
                ))}
              </ol>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          {data.image && (
            <Card className="mb-4">
              <Card.Img variant="top" src={data.image} alt={`${data.title} prepared dish`} style={{height: '250px', objectFit: 'cover'}} />
            </Card>
          )}
          
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Find This Dish At</Card.Title>
              <ListGroup variant="flush">
                {data.restaurantsWithDish.map((restaurant, idx) => (
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
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/submit', { state: { type: 'recipe', id: data.id, name: data.title } })}
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
