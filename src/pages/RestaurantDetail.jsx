import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Badge, ListGroup, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { restaurants as sampleRestaurants } from '../data/sampleRestaurants'

export default function RestaurantDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [userReviews, setUserReviews] = useState([])

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

  // Fetch user-submitted reviews from localStorage
  useEffect(() => {
    const allReviews = JSON.parse(localStorage.getItem('userSubmittedReviews') || '[]')
    const matchingReviews = allReviews.filter(review => review.name === mockRestaurant.name)
    setUserReviews(matchingReviews)
  }, [mockRestaurant.name])

  // Helper: derive average rating and star display
  const averageRating = userReviews.length > 0 ? userReviews.reduce((s, r) => s + (r.rating || 0), 0) / userReviews.length : null
  const avgRounded = averageRating ? Math.round(averageRating * 10) / 10 : null
  const avgStars = averageRating ? '★'.repeat(Math.round(averageRating)) + (Math.round(averageRating) < 5 ? '☆'.repeat(5 - Math.round(averageRating)) : '') : null

  // Menu price hints by overall restaurant price range
  const menuPriceMap = {
    '$': '$5 - $12',
    '$$': '$12 - $25',
    '$$$': '$25 - $60',
    '$$$$': '$40+'
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
              {mockRestaurant.address && <p><strong>Address:</strong> {mockRestaurant.address}</p>}
              {mockRestaurant.cuisine && <p><strong>Cuisine:</strong> {mockRestaurant.cuisine}</p>}
              {mockRestaurant.price && <p><strong>Price Range:</strong> {mockRestaurant.price}</p>}
              {userReviews.length > 0 ? (
                <p>
                  <strong>Rating:</strong> {avgStars} <small className="text-muted">({avgRounded}/5 — {userReviews.length} review{userReviews.length > 1 ? 's' : ''})</small>
                </p>
              ) : (
                mockRestaurant.reputation !== null && <p><strong>Rating:</strong>{mockRestaurant.reputation}</p>
              )}
            </Card.Body>
          </Card>

          {mockRestaurant.happyHour && (
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Happy Hour</Card.Title>
                <p className="mb-0"><small className="text-muted">{mockRestaurant.happyHour}</small></p>
              </Card.Body>
            </Card>
          )}
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
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <strong>{item}</strong>
                        <div>
                          <small className="text-muted">{mockRestaurant.menuItemDescriptions?.[item] || 'A signature dish worth trying.'}</small>
                        </div>
                      </div>
                      <div className="text-end ms-3">
                          <small className="text-muted">{mockRestaurant.menuItemPrices?.[item] || menuPriceMap[mockRestaurant.price] || mockRestaurant.price}</small>
                        </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Community Reviews</Card.Title>
              {userReviews.length > 0 ? (
                <ListGroup variant="flush">
                  {userReviews.map((review, idx) => (
                    <ListGroup.Item key={idx} className="mb-3 pb-3 border-bottom">
                      <div className="mb-2">
                        <strong>Rating:</strong> {'★'.repeat(review.rating)}{review.rating < 5 ? '☆'.repeat(5 - review.rating) : ''} ({review.rating}/5)
                      </div>
                      <div className="mb-2">
                        <strong>Vibes:</strong> 
                        <div>
                          {review.vibes && review.vibes.length > 0 ? (
                            review.vibes.map((vibe, vibeIdx) => (
                              <Badge key={vibeIdx} bg="info" className="me-2 mb-2">{vibe}</Badge>
                            ))
                          ) : (
                            <small className="text-muted">No vibes tagged</small>
                          )}
                        </div>
                      </div>
                      <div className="mb-2">
                        <strong>Price Range:</strong> {review.price}
                      </div>
                      <div className="mb-2">
                        <strong>Menu Highlights:</strong><br />
                        <small>{review.menuItems}</small>
                      </div>
                      <div>
                        <strong>Review:</strong>
                        <p className="mt-2 mb-0"><small>{review.review}</small></p>
                      </div>
                      <small className="text-muted d-block mt-2">Submitted: {review.submittedAt}</small>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p className="text-muted">No reviews yet. Be the first to review!</p>
              )}
              <Button
                variant="primary"
                onClick={() => navigate('/submit', { state: { type: 'restaurant', id: mockRestaurant.id, name: mockRestaurant.name } })}
                className="mt-3 w-100"
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
