import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RecipeCard({ id, title, difficulty, time, image, isCopycat, cuisine }) {
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
					<div>
						<div className="d-flex align-items-center justify-content-between">
							<Card.Title className="mb-1" style={{fontSize: '1rem', marginBottom: 0}}>{title}</Card.Title>
							{isCopycat ? <span className="ms-2 text-primary" style={{fontSize: '1.1rem'}} aria-label="copycat">★</span> : null}
						</div>
						{cuisine && <div><small className="text-muted">{cuisine}</small></div>}
						<Card.Text className="mb-3"><small className="text-muted">{difficulty} · {time}</small></Card.Text>
					</div>
				<Button as={Link} to={`/recipe/${id}`} variant="primary" size="sm">View Recipe</Button>
			</Card.Body>
		</Card>
	)
}
