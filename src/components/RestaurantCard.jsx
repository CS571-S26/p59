import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RestaurantCard({ id, name, cuisine, price, signature, image }) {
	const imgSrc = image

	return (
		<Card as={Link} to={`/restaurant/${id}`} className="text-decoration-none text-body h-100">
			<div style={{height: 180, overflow: 'hidden'}}>
				{imgSrc ? (
					<Card.Img variant="top" src={imgSrc} alt={name} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
				) : (
					<div className="placeholder-img" aria-hidden />
				)}
			</div>
			<Card.Body>
				<Card.Title className="mb-1">{name}</Card.Title>
				<div className="d-flex justify-content-between align-items-center mb-2">
					<small className="text-muted">{cuisine}</small>
					<small className="text-muted">{price}</small>
				</div>
				{signature && <Badge bg="secondary">{signature}</Badge>}
			</Card.Body>
		</Card>
	)
}
