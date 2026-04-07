import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RecipeCard({ id, title, difficulty, time, image, isCopycat }) {
	const imgSrc = image

	return (
		<Card className="h-100">
			<div style={{height: 160, overflow: 'hidden'}}>
				{imgSrc ? (
					<Card.Img variant="top" src={imgSrc} alt={title} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
				) : (
					<div className="placeholder-img" aria-hidden />
				)}
			</div>
			<Card.Body>
				<div className="d-flex justify-content-between align-items-start">
					<Card.Title className="mb-1" style={{fontSize: '1rem'}}>{title}</Card.Title>
					{isCopycat && <Badge bg="success">Copycat</Badge>}
				</div>
				<Card.Text className="mb-3"><small className="text-muted">{difficulty} · {time}</small></Card.Text>
				<Button as={Link} to={`/recipe/${id}`} variant="primary" size="sm">View Recipe</Button>
			</Card.Body>
		</Card>
	)
}
