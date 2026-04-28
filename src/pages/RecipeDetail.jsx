import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Badge, ListGroup, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { recipes as sampleRecipes } from '../data/sampleRecipes'

export default function RecipeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [userRecipes, setUserRecipes] = useState([])
  const [currentRecipe, setCurrentRecipe] = useState(null)

  useEffect(() => {
    // First check if it's a user-submitted recipe (ID is a timestamp)
    const userSubmittedRecipes = JSON.parse(localStorage.getItem('userSubmittedRecipes') || '[]')
    const userRecipe = userSubmittedRecipes.find((r) => String(r.id) === String(id))
    
    if (userRecipe) {
      setCurrentRecipe(userRecipe)
    } else {
      // Otherwise look in sample recipes
      const sampleRecipe = sampleRecipes.find((r) => String(r.id) === String(id))
      setCurrentRecipe(sampleRecipe || null)
    }
  }, [id])

  const recipe = currentRecipe

  const mockRecipe = recipe ? {
    ...recipe,
    title: recipe.name || recipe.title || 'Unknown Recipe',
  } : {
    id: parseInt(id),
    title: 'Unknown Recipe',
    isCopycat: false,
    copycatOf: null,
    difficulty: 'Unknown',
    time: 'N/A',
    complexity: '',
    cuisine: 'Unknown',
    restaurantsWithDish: [],
    ingredients: [],
    instructions: [],
    reviews: []
  }

  const data = {
    id: mockRecipe.id,
    title: mockRecipe.name || mockRecipe.title,
    isCopycat: mockRecipe.isCopycat || false,
    copycatOf: mockRecipe.copycatOf || null,
    difficulty: mockRecipe.difficulty || 'Unknown',
    time: mockRecipe.time || 'N/A',
    complexity: mockRecipe.complexity || '',
    cuisine: mockRecipe.cuisine || 'Unknown',
    image: mockRecipe.image || null,
    restaurantsWithDish: mockRecipe.restaurantsWithDish || [],
    ingredients: mockRecipe.ingredients || [],
    instructions: mockRecipe.instructions || [],
    reviews: mockRecipe.reviews || [],
    submittedAt: mockRecipe.submittedAt || null
  }

  // Fetch user-submitted recipes from localStorage for the same recipe name
  useEffect(() => {
    const allRecipes = JSON.parse(localStorage.getItem('userSubmittedRecipes') || '[]')
    const matchingRecipes = allRecipes.filter(r => r.name === data.title)
    setUserRecipes(matchingRecipes)
  }, [data.title])

  return (
    <Container>
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        ← Back
      </Button>

      <Row>
        <Col md={8}>
          <h1>{data.title}</h1>

          {data.submittedAt && (
            <div className="alert alert-info mb-3">
              <Badge bg="success">Community</Badge>
              <p className="mt-2">Shared by our community on {new Date(data.submittedAt).toLocaleDateString()}</p>
            </div>
          )}

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
              {data.complexity && <p><strong>Complexity:</strong> {data.complexity}</p>}
              <p><strong>Cuisine:</strong> {data.cuisine}</p>
            </Card.Body>
          </Card>

          {data.ingredients && data.ingredients.length > 0 && (
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
          )}

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Instructions</Card.Title>
              {typeof data.instructions === 'string' ? (
                <p>{data.instructions}</p>
              ) : (
                <ol>
                  {data.instructions.map((instruction, idx) => (
                    <li key={idx} className="mb-2">{instruction}</li>
                  ))}
                </ol>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          {data.image && (
            <Card className="mb-4">
              <Card.Img variant="top" src={data.image} alt={`${data.title} prepared dish`} style={{height: '250px', objectFit: 'cover'}} />
            </Card>
          )}
          
          {data.restaurantsWithDish && data.restaurantsWithDish.length > 0 && (
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
          )}

          <Card>
            <Card.Body>
              <Card.Title>New Recipe</Card.Title>
                <p className="text-muted">Want to share your own version or have an idea for a new recipe? </p>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/submit', { state: { type: 'recipe', id: data.id, name: data.title } })}
                className="mt-3 w-100"
              >
                Submit it here!
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
