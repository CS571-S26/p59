import React, { useState } from 'react'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap'
import RecipeCard from '../components/RecipeCard'
import { recipes as sampleRecipes } from '../data/sampleRecipes'

const TAGS = [
  '5 ingredients or less',
  'one-pan',
  'vegetarian',
  'vegan',
  'high protein'
]

const ALLERGENS = [
  'Nut Free',
  'Dairy Free',
  'Gluten Free'
]

export default function Recipes() {
  const [query, setQuery] = useState('')
  const [cuisine, setCuisine] = useState('any')
  const [difficulty, setDifficulty] = useState('any')
  const [allergen, setAllergen] = useState('any')
  const [selectedTag, setSelectedTag] = useState('any')

  function toggleTag(tag) {
    setSelectedTag((prev) => (prev === tag ? 'any' : tag))
  }

  const filtered = sampleRecipes.filter((r) => {
    if (cuisine !== 'any' && r.cuisine && r.cuisine !== cuisine) return false
    if (difficulty !== 'any' && r.difficulty !== difficulty) return false
    if (query && !r.name.toLowerCase().includes(query.toLowerCase())) return false
    if (selectedTag && selectedTag !== 'any') {
      const t = selectedTag
      if (t === '5 ingredients or less' && !(r.ingredientsCount <= 5)) return false
      if (t === 'one-pan' && !(r.method?.toLowerCase().includes('one') || r.method?.toLowerCase().includes('pan'))) return false
      if (t === 'vegetarian' && !((r.dietary || []).map(d => d.toLowerCase()).includes('vegetarian'))) return false
      if (t === 'vegan' && !((r.dietary || []).map(d => d.toLowerCase()).includes('vegan'))) return false
      if (t === 'high protein' && !(r.ingredientsCount >= 8)) return false
    }
    return true
  })

  const cuisines = Array.from(new Set(sampleRecipes.map((r) => r.cuisine || 'Other')))

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col>
          <Form.Control
            placeholder="Search recipes by name, ingredient or restaurant..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <h2 className="mb-0">Cook your favorites at home</h2>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <div className="tag-buttons mb-2">
            <Button variant={selectedTag === 'any' ? 'primary' : 'outline-primary'} size="sm" onClick={() => setSelectedTag('any')}>All</Button>
            {TAGS.map((tag) => (
              <Button
                key={tag}
                size="sm"
                variant={selectedTag === tag ? 'primary' : 'outline-primary'}
                onClick={() => toggleTag(tag)}
                className="ms-2"
              >
                {tag}
              </Button>
            ))}
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={3} className="mb-3">
          <Card className="p-3 sticky-top">
            <h5>Filters</h5>
            <Form.Group className="mb-2">
              <Form.Label>Cuisine</Form.Label>
              <Form.Select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                <option value="any">Any</option>
                {cuisines.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Difficulty</Form.Label>
              <Form.Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="any">Any</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Allergens</Form.Label>
              <Form.Select value={allergen} onChange={(e) => setAllergen(e.target.value)}>
                <option value="any">Any</option>
                {ALLERGENS.map((a) => <option key={a} value={a}>{a}</option>)}
              </Form.Select>
            </Form.Group>

            <Button variant="secondary" size="sm" onClick={() => { setCuisine('any'); setDifficulty('any'); setAllergen('any'); setSelectedTag('any'); setQuery('') }}>
              Reset
            </Button>
          </Card>
        </Col>

        <Col md={9}>
          <Row className="g-3">
            {filtered.map((r) => (
              <Col key={r.id} xs={12} sm={6} md={4}>
                <RecipeCard id={r.id} title={r.name} difficulty={r.difficulty} time={`${r.time}m`} image={null} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
