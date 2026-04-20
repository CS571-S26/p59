import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<section className="hero-section">
				<Container className="text-center">
					<h1>Welcome to RePlate</h1>
					<p className="subtitle">
						Discover Madison's finest restaurants and master their signature dishes 
						with our curated copycat recipes. Explore by price, vibe, and cuisine.
					</p>
					<div className="hero-cta">
						<Button as={Link} to="/restaurants" className="btn btn-primary btn-lg">
							Explore Restaurants
						</Button>
						<Button as={Link} to="/recipes" className="btn btn-primary btn-lg">
							Browse Recipes
						</Button>
					</div>
				</Container>
			</section>

			{/* Features Section */}
			<section className="features-section">
				<Container>
					<h2 className="text-center mb-5">How It Works</h2>
					<Row className="g-4">
						<Col md={4} className="feature-card">
							<div className="feature-icon">🍽️</div>
							<h3>Discover Restaurants</h3>
							<p>Browse Madison's best restaurants filtered by cuisine, vibe, and price point. Find your next favorite dining spot.</p>
						</Col>
						<Col md={4} className="feature-card">
							<div className="feature-icon">📖</div>
							<h3>Learn Recipes</h3>
							<p>Find copycat recipes from your favorite local restaurants. Cook restaurant-quality meals at home.</p>
						</Col>
						<Col md={4} className="feature-card">
							<div className="feature-icon">🌏</div>
							<h3>Share & Explore</h3>
							<p>Submit your own recipes and discoveries. Build a community of food lovers in Madison.</p>
						</Col>
					</Row>
				</Container>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<Container className="text-center">
					<h2>Ready to Cook?</h2>
					<p>Explore our collection of restaurants and recipes</p>
					<Button as={Link} to="/recipes" className="btn btn-primary btn-lg">
						Start Exploring
					</Button>
				</Container>
			</section>
		</>
	)
}
