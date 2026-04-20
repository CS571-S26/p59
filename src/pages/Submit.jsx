import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col, ButtonGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { restaurants as sampleRestaurants } from '../data/sampleRestaurants'
import '../styles/Submit.css'

export default function Submit() {
	const location = useLocation()
	const [submitType, setSubmitType] = useState('recipe')
	const [isCopycat, setIsCopycat] = useState(false)
	const [copycatRestaurant, setCopycatRestaurant] = useState('')
	const [recipeName, setRecipeName] = useState('')
	const [restaurantName, setRestaurantName] = useState('')
	const vibes = Array.from(new Set(sampleRestaurants.flatMap(r => r.vibe || [])))

	useEffect(() => {
		if (location?.state?.type) {
			setSubmitType(location.state.type)
			if (location.state.type === 'restaurant' && location.state.name) {
				setRestaurantName(location.state.name)
			}
			if (location.state.type === 'recipe' && location.state.name) {
				setRecipeName(location.state.name)
			}
		}
	}, [location])

	return (
		<Container className="submit-container">
			<div className="submit-header">
				<h1>Submit</h1>
				<p>Share a restaurant review or a copycat recipe with our community.</p>
			</div>

			<div className="button-group-container">
				<ButtonGroup className="w-100">
					<Button 
						variant={submitType === 'recipe' ? 'primary' : 'outline-primary'}
						onClick={() => setSubmitType('recipe')}
						className="w-50"
					>
						Submit Recipe
					</Button>
					<Button 
						variant={submitType === 'restaurant' ? 'primary' : 'outline-primary'}
						onClick={() => setSubmitType('restaurant')}
						className="w-50"
					>
						Submit Review
					</Button>
				</ButtonGroup>
			</div>

			<div className="submit-form-wrapper">
				<Form>
					{submitType === 'recipe' ? (
						<>
							<h3>Submit a Copycat Recipe</h3>
							<Form.Group className="mb-3">
								<Form.Label>Recipe Name</Form.Label>
								<Form.Control value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="e.g., Copycat Garlic Noodles" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Cuisine Type</Form.Label>
								<Form.Control placeholder="e.g., Asian Fusion" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Difficulty Level</Form.Label>
								<Form.Select defaultValue="">
									<option value="">Select difficulty...</option>
									<option value="Easy">Easy</option>
									<option value="Medium">Medium</option>
									<option value="Hard">Hard</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Time to Prepare (minutes)</Form.Label>
								<Form.Control type="number" placeholder="e.g., 20" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Is this a copycat of a restaurant dish?</Form.Label>
								<div>
									<Form.Check inline type="radio" label="Yes" name="copycat" checked={isCopycat} onChange={() => setIsCopycat(true)} />
									<Form.Check inline type="radio" label="No" name="copycat" checked={!isCopycat} onChange={() => { setIsCopycat(false); setCopycatRestaurant('') }} />
								</div>
							</Form.Group>
							{isCopycat && (
								<Form.Group className="mb-3">
									<Form.Label>Which restaurant is this a copycat of?</Form.Label>
									<Form.Control value={copycatRestaurant} onChange={(e) => setCopycatRestaurant(e.target.value)} placeholder="Restaurant name" />
								</Form.Group>
							)}
							<Form.Group className="mb-3">
								<Form.Label>Recipe Details / Instructions</Form.Label>
								<Form.Control as="textarea" rows={6} placeholder="Include ingredients and step-by-step instructions..." />
							</Form.Group>
							<div className="submit-btn-container">
								<Button type="submit" className="btn-submit">Submit Recipe</Button>
							</div>
						</>
					) : (
						<>
							<h3>Submit a Restaurant Review</h3>
							<Form.Group className="mb-3">
								<Form.Label>Restaurant Name</Form.Label>
								<Form.Control value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} placeholder="e.g., Campus Deli" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Cuisine Type</Form.Label>
								<Form.Control placeholder="e.g., American" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Price Range</Form.Label>
								<Form.Select defaultValue="">
									<option value="">Select price range...</option>
									<option value="$">$ (Under $5)</option>
									<option value="$$">$$ ($5-$15)</option>
									<option value="$$$">$$$ ($15+)</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Vibe Tag</Form.Label>
								<Form.Select>
									<option value="">Select vibe...</option>
									{vibes.map((v) => (
										<option key={v} value={v}>{v}</option>
									))}
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Popular Menu Items</Form.Label>
								<Form.Control placeholder="List signature dishes..." />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Your Review</Form.Label>
								<Form.Control as="textarea" rows={6} placeholder="Share your experience, recommendations, and what made this restaurant special..." />
							</Form.Group>
							<div className="submit-btn-container">
								<Button type="submit" className="btn-submit">Submit Review</Button>
							</div>
						</>
					)}
				</Form>
			</div>
		</Container>
	)
}
