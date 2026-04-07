import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<Container>
			<h1>Welcome to RePlate</h1>
			<p>
				Discover local restaurants and copycat recipes
				by price, vibe, and signature dishes.
			</p>
			<div className="d-flex gap-2">
                <Button as={Link} to="/restaurants" variant="primary">Restaurants</Button>
				<Button as={Link} to="/recipes" variant="primary">Recipes</Button>
			</div>
		</Container>
	)
}
