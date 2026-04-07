import React, { useState } from 'react'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap'
import RestaurantCard from '../components/RestaurantCard'
import { restaurants as sampleRestaurants } from '../data/sampleRestaurants'

const TAGS = [
  'Student Specials',
  'Date Night',
  'Lively',
  'Family-Friendly',
  'Upscale',
  'Study Spot',
  'Happy Hour',
  'Patio'
]

export default function Restaurants() {
  const [query, setQuery] = useState('')
  const [cuisine, setCuisine] = useState('any')
  const [price, setPrice] = useState('any')
  const [selectedTag, setSelectedTag] = useState('any')

  function toggleTag(tag) {
    setSelectedTag((prev) => (prev === tag ? 'any' : tag))
  }

  const filtered = sampleRestaurants.filter((r) => {
    if (cuisine !== 'any' && r.cuisine !== cuisine) return false
    if (price !== 'any' && r.price !== price) return false
    if (query) {
      const q = query.toLowerCase()
      if (!(`${r.name} ${r.signatureDishes.join(' ')} ${r.location}`.toLowerCase().includes(q))) return false
    }
    if (selectedTag && selectedTag !== 'any') {
      const lowerVibes = (r.vibe || []).map((v) => v.toLowerCase())
      if (!lowerVibes.includes(selectedTag.toLowerCase())) return false
    }
    return true
  })

  const cuisines = Array.from(new Set(sampleRestaurants.map((r) => r.cuisine)))

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col>
          <Form.Control
            placeholder="Search restaurants, dishes, or locations..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h2 className="mb-0">Find your next go-to spot</h2>
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
              <Form.Label>Price</Form.Label>
              <Form.Select value={price} onChange={(e) => setPrice(e.target.value)}>
                <option value="any">Any</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
              </Form.Select>
            </Form.Group>

            <Button variant="secondary" size="sm" onClick={() => { setCuisine('any'); setPrice('any'); setSelectedTag('any'); setQuery('') }}>
              Reset
            </Button>
          </Card>
        </Col>

        <Col md={9}>
          <Row className="g-3">
            {filtered.map((r) => (
              <Col key={r.id} xs={12} sm={6} md={4}>
                <RestaurantCard id={r.id} name={r.name} cuisine={r.cuisine} price={r.price} signature={r.signatureDishes?.[0]} image={null} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
