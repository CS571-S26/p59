import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col, ButtonGroup, Alert, Modal } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { restaurants as sampleRestaurants } from '../data/sampleRestaurants'
import '../styles/Submit.css'

export default function Submit() {
	const location = useLocation()
	const [submitType, setSubmitType] = useState('recipe')
	const [submissionStatus, setSubmissionStatus] = useState(null) // 'success', 'error', or null
	const [validationErrors, setValidationErrors] = useState({})

	// Confirmation modal state
	const [showConfirmModal, setShowConfirmModal] = useState(false)
	const [pendingType, setPendingType] = useState(null) // 'recipe' or 'restaurant'

	// Recipe form state
	const [recipeName, setRecipeName] = useState('')
	const [recipeCuisine, setRecipeCuisine] = useState('')
	const [recipeDifficulty, setRecipeDifficulty] = useState('')
	const [recipeTime, setRecipeTime] = useState('')
	const [isCopycat, setIsCopycat] = useState(false)
	const [copycatRestaurant, setCopycatRestaurant] = useState('')
	const [recipeDetails, setRecipeDetails] = useState('')
	const [recipePhoto, setRecipePhoto] = useState(null)
	const [recipePhotoPreview, setRecipePhotoPreview] = useState(null)

	// Restaurant review form state
	const [restaurantName, setRestaurantName] = useState('')
	const [restaurantCuisine, setRestaurantCuisine] = useState('')
	const [restaurantPrice, setRestaurantPrice] = useState('')
	const [restaurantVibes, setRestaurantVibes] = useState([])
	const [restaurantRating, setRestaurantRating] = useState(0)
	const [menuItems, setMenuItems] = useState('')
	const [restaurantReview, setRestaurantReview] = useState('')

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
		// Clear submission status when switching forms
		setSubmissionStatus(null)
		setValidationErrors({})
	}, [location, submitType])

	// Validate recipe form
	const validateRecipeForm = () => {
		const errors = {}
		if (!recipeName.trim()) errors.recipeName = 'Recipe name is required'
		if (!recipeCuisine.trim()) errors.recipeCuisine = 'Cuisine type is required'
		if (!recipeDifficulty) errors.recipeDifficulty = 'Difficulty level is required'
		if (!recipeTime || recipeTime <= 0) errors.recipeTime = 'Valid prep time is required'
		if (isCopycat && !copycatRestaurant.trim()) errors.copycatRestaurant = 'Please specify the restaurant'
		if (!recipeDetails.trim()) errors.recipeDetails = 'Recipe details and instructions are required'
		return errors
	}

	// Validate restaurant form
	const validateRestaurantForm = () => {
		const errors = {}
		if (!restaurantName.trim()) errors.restaurantName = 'Restaurant name is required'
		if (!restaurantCuisine.trim()) errors.restaurantCuisine = 'Cuisine type is required'
		if (!restaurantPrice) errors.restaurantPrice = 'Price range is required'
		if (restaurantVibes.length === 0) errors.restaurantVibes = 'Please select at least one vibe'
		if (restaurantRating === 0) errors.restaurantRating = 'Please rate the restaurant'
		if (!menuItems.trim()) errors.menuItems = 'Menu items are required'
		if (!restaurantReview.trim()) errors.restaurantReview = 'Review is required'
		return errors
	}

	// Handle recipe submission
	const handleRecipeSubmit = (e) => {
		if (e && e.preventDefault) e.preventDefault()
		const errors = validateRecipeForm()

		if (Object.keys(errors).length > 0) {
			setValidationErrors(errors)
			setSubmissionStatus('error')
			return
		}

		// Create submission object
		const newRecipe = {
			id: Date.now(),
			name: recipeName,
			cuisine: recipeCuisine,
			difficulty: recipeDifficulty,
			time: parseInt(recipeTime),
			isCopycat: isCopycat,
			copycatOf: isCopycat ? copycatRestaurant : null,
			instructions: recipeDetails,
			image: recipePhoto,
			submittedAt: new Date().toLocaleString()
		}

		// Save to localStorage
		const existingRecipes = JSON.parse(localStorage.getItem('userSubmittedRecipes') || '[]')
		existingRecipes.push(newRecipe)
		localStorage.setItem('userSubmittedRecipes', JSON.stringify(existingRecipes))

		// Show success message and reset form
		setSubmissionStatus('success')
		setValidationErrors({})
		setRecipeName('')
		setRecipeCuisine('')
		setRecipeDifficulty('')
		setRecipeTime('')
		setIsCopycat(false)
		setCopycatRestaurant('')
		setRecipeDetails('')
		setRecipePhoto(null)
		setRecipePhotoPreview(null)

		// Clear success message after 3 seconds
		setTimeout(() => setSubmissionStatus(null), 3000)
	}

	// Handle restaurant submission
	const handleRestaurantSubmit = (e) => {
		if (e && e.preventDefault) e.preventDefault()
		const errors = validateRestaurantForm()

		if (Object.keys(errors).length > 0) {
			setValidationErrors(errors)
			setSubmissionStatus('error')
			return
		}

		// Create submission object
		const newReview = {
			id: Date.now(),
			name: restaurantName,
			cuisine: restaurantCuisine,
			price: restaurantPrice,
			vibes: restaurantVibes,
			rating: restaurantRating,
			menuItems: menuItems,
			review: restaurantReview,
			submittedAt: new Date().toLocaleString()
		}

		// Save to localStorage
		const existingReviews = JSON.parse(localStorage.getItem('userSubmittedReviews') || '[]')
		existingReviews.push(newReview)
		localStorage.setItem('userSubmittedReviews', JSON.stringify(existingReviews))

		// Show success message and reset form
		setSubmissionStatus('success')
		setValidationErrors({})
		setRestaurantName('')
		setRestaurantCuisine('')
		setRestaurantPrice('')
		setRestaurantVibes([])
		setRestaurantRating(0)
		setMenuItems('')
		setRestaurantReview('')

		// Clear success message after 3 seconds
		setTimeout(() => setSubmissionStatus(null), 3000)
	}

	// Open confirmation modal (called from submit button)
	const openConfirm = (type) => {
		setPendingType(type)
		setShowConfirmModal(true)
	}

	const closeConfirm = () => {
		setShowConfirmModal(false)
		setPendingType(null)
	}

	const confirmSubmit = async () => {
		if (pendingType === 'recipe') {
			// call submit handler programmatically
			handleRecipeSubmit()
		} else if (pendingType === 'restaurant') {
			handleRestaurantSubmit()
		}
		closeConfirm()
	}

	// Reset form when switching submission types
	const handleTypeSwitch = (type) => {
		setSubmitType(type)
		setValidationErrors({})
		setSubmissionStatus(null)
	}

	// Toggle vibe selection
	const toggleVibe = (vibe) => {
		setRestaurantVibes(prev => 
			prev.includes(vibe) 
				? prev.filter(v => v !== vibe)
				: [...prev, vibe]
		)
	}

	// Handle recipe photo upload
	const handleRecipePhotoChange = (e) => {
		const file = e.target.files?.[0]
		if (file) {
			// Create preview
			const reader = new FileReader()
			reader.onloadend = () => {
				setRecipePhotoPreview(reader.result)
				setRecipePhoto(reader.result)
			}
			reader.readAsDataURL(file)
		}
	}

	// Remove recipe photo
	const removeRecipePhoto = () => {
		setRecipePhoto(null)
		setRecipePhotoPreview(null)
	}

	return (
		<Container className="submit-container">
			<div className="submit-header">
				<h1>Submit</h1>
				<p>Share a restaurant review or a copycat recipe with our community.</p>
			</div>

			{/* Success/Error Alerts */}
			{submissionStatus === 'success' && (
				<Alert variant="success" className="mb-4" dismissible onClose={() => setSubmissionStatus(null)}>
					🎉 <strong>Thank you!</strong> Your submission has been received. It will appear in our community section shortly!
				</Alert>
			)}
			{submissionStatus === 'error' && (
				<Alert variant="danger" className="mb-4" dismissible onClose={() => setSubmissionStatus(null)}>
					❌ <strong>Oops!</strong> Please fix the errors below and try again.
				</Alert>
			)}

			<div className="button-group-container">
				<ButtonGroup className="w-100">
					<Button 
						variant={submitType === 'recipe' ? 'primary' : 'outline-primary'}
						onClick={() => handleTypeSwitch('recipe')}
						className="w-50"
					>
						Submit Recipe
					</Button>
					<Button 
						variant={submitType === 'restaurant' ? 'primary' : 'outline-primary'}
						onClick={() => handleTypeSwitch('restaurant')}
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
								<Form.Label>Recipe Name <span className="text-danger">*</span></Form.Label>
								<Form.Control 
									value={recipeName} 
									onChange={(e) => setRecipeName(e.target.value)}
									isInvalid={!!validationErrors.recipeName}
									placeholder="e.g., Copycat Garlic Noodles" 
								/>
								{validationErrors.recipeName && (
									<Form.Control.Feedback type="invalid">{validationErrors.recipeName}</Form.Control.Feedback>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Cuisine Type <span className="text-danger">*</span></Form.Label>
								<Form.Control 
									value={recipeCuisine}
									onChange={(e) => setRecipeCuisine(e.target.value)}
									isInvalid={!!validationErrors.recipeCuisine}
									placeholder="e.g., Asian Fusion" 
								/>
								{validationErrors.recipeCuisine && (
									<Form.Control.Feedback type="invalid">{validationErrors.recipeCuisine}</Form.Control.Feedback>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Difficulty Level <span className="text-danger">*</span></Form.Label>
								<Form.Select 
									value={recipeDifficulty}
									onChange={(e) => setRecipeDifficulty(e.target.value)}
									isInvalid={!!validationErrors.recipeDifficulty}
								>
									<option value="">Select difficulty...</option>
									<option value="Easy">Easy</option>
									<option value="Medium">Medium</option>
									<option value="Hard">Hard</option>
								</Form.Select>
								{validationErrors.recipeDifficulty && (
									<Form.Control.Feedback type="invalid">{validationErrors.recipeDifficulty}</Form.Control.Feedback>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Time to Prepare (minutes) <span className="text-danger">*</span></Form.Label>
								<Form.Control 
									type="number" 
									value={recipeTime}
									onChange={(e) => setRecipeTime(e.target.value)}
									isInvalid={!!validationErrors.recipeTime}
									placeholder="e.g., 20" 
								/>
								{validationErrors.recipeTime && (
									<Form.Control.Feedback type="invalid">{validationErrors.recipeTime}</Form.Control.Feedback>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Is this a copycat of a restaurant dish?</Form.Label>
								<div>
									<Form.Check 
										inline 
										type="radio" 
										label="Yes" 
										name="copycat" 
										checked={isCopycat} 
										onChange={() => setIsCopycat(true)} 
									/>
									<Form.Check 
										inline 
										type="radio" 
										label="No" 
										name="copycat" 
										checked={!isCopycat} 
										onChange={() => { setIsCopycat(false); setCopycatRestaurant('') }} 
									/>
								</div>
							</Form.Group>
							{isCopycat && (
								<Form.Group className="mb-3">
									<Form.Label>Which restaurant is this a copycat of? <span className="text-danger">*</span></Form.Label>
									<Form.Control 
										value={copycatRestaurant} 
										onChange={(e) => setCopycatRestaurant(e.target.value)}
										isInvalid={!!validationErrors.copycatRestaurant}
										placeholder="Restaurant name" 
									/>
									{validationErrors.copycatRestaurant && (
										<Form.Control.Feedback type="invalid">{validationErrors.copycatRestaurant}</Form.Control.Feedback>
									)}
								</Form.Group>
							)}
							<Form.Group className="mb-3">
								<Form.Label>Recipe Photo</Form.Label>
								<Form.Control 
									type="file" 
									accept="image/*"
									onChange={handleRecipePhotoChange}
									disabled={!!recipePhotoPreview}
								/>
								<small className="text-muted d-block mt-2">Optional: Upload a photo of your recipe</small>
							</Form.Group>
							{recipePhotoPreview && (
								<Form.Group className="mb-3">
									<div className="recipe-photo-preview mb-2">
										<img 
											src={recipePhotoPreview} 
											alt="Recipe preview" 
											style={{
												maxWidth: '100%',
												maxHeight: '300px',
												borderRadius: '4px'
											}}
										/>
									</div>
									<Button 
										variant="danger" 
										size="sm"
										onClick={removeRecipePhoto}
									>
										Remove Photo
									</Button>
								</Form.Group>
							)}
							<Form.Group className="mb-3">
								<Form.Label>Recipe Details / Instructions <span className="text-danger">*</span></Form.Label>
								<Form.Control 
									as="textarea" 
									rows={6} 
									value={recipeDetails}
									onChange={(e) => setRecipeDetails(e.target.value)}
									isInvalid={!!validationErrors.recipeDetails}
									placeholder="Include ingredients and step-by-step instructions..." 
								/>
								{validationErrors.recipeDetails && (
									<Form.Control.Feedback type="invalid">{validationErrors.recipeDetails}</Form.Control.Feedback>
								)}
							</Form.Group>
							<div className="submit-btn-container">
								<Button type="button" className="btn-submit" onClick={() => openConfirm('recipe')}>Submit Recipe</Button>
							</div>
						</>
					) : (
						<>
							<h3>Submit a Restaurant Review</h3>
							<Form.Group className="mb-3">
								<Form.Label>Restaurant Name <span className="text-danger">*</span></Form.Label>
								<Form.Control 
									value={restaurantName} 
									onChange={(e) => setRestaurantName(e.target.value)}
									isInvalid={!!validationErrors.restaurantName}
									placeholder="e.g., Campus Deli" 
								/>
								{validationErrors.restaurantName && (
									<Form.Control.Feedback type="invalid">{validationErrors.restaurantName}</Form.Control.Feedback>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Cuisine Type <span className="text-danger">*</span></Form.Label>
								<Form.Control 
									value={restaurantCuisine}
									onChange={(e) => setRestaurantCuisine(e.target.value)}
									isInvalid={!!validationErrors.restaurantCuisine}
									placeholder="e.g., American" 
								/>
								{validationErrors.restaurantCuisine && (
									<Form.Control.Feedback type="invalid">{validationErrors.restaurantCuisine}</Form.Control.Feedback>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Price Range <span className="text-danger">*</span></Form.Label>
								<Form.Select 
									value={restaurantPrice}
									onChange={(e) => setRestaurantPrice(e.target.value)}
									isInvalid={!!validationErrors.restaurantPrice}
								>
									<option value="">Select price range...</option>
									<option value="$">$ (Under $10)</option>
									<option value="$$">$$ ($10-$20)</option>
									<option value="$$$">$$$ ($20-$30)</option>
									<option value="$$$$">$$$$ ($30+)</option>
								</Form.Select>
								{validationErrors.restaurantPrice && (
									<Form.Control.Feedback type="invalid">{validationErrors.restaurantPrice}</Form.Control.Feedback>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Vibe Tags <span className="text-danger">*</span></Form.Label>
								<div className="vibe-buttons mb-2">
									{vibes.map((v) => (
										<Button
											key={v}
											variant={restaurantVibes.includes(v) ? 'primary' : 'outline-primary'}
											size="sm"
											onClick={() => toggleVibe(v)}
											className="me-2 mb-2"
										>
											{v}
										</Button>
									))}
								</div>
								{validationErrors.restaurantVibes && (
									<div className="text-danger" style={{ fontSize: '0.875rem' }}>{validationErrors.restaurantVibes}</div>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Rating <span className="text-danger">*</span></Form.Label>
								<div className="star-rating">
									{[1, 2, 3, 4, 5].map((star) => (
										<button
											key={star}
											type="button"
											className={`star ${star <= restaurantRating ? 'active' : ''}`}
											onClick={() => setRestaurantRating(star)}
											aria-label={`${star} stars`}
										>
											★
										</button>
									))}
									<span className="ms-2">{restaurantRating > 0 ? `${restaurantRating} / 5` : 'Select a rating'}</span>
								</div>
								{validationErrors.restaurantRating && (
									<div className="text-danger" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>{validationErrors.restaurantRating}</div>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Popular Menu Items <span className="text-danger">*</span></Form.Label>
								<Form.Control 
									value={menuItems}
									onChange={(e) => setMenuItems(e.target.value)}
									isInvalid={!!validationErrors.menuItems}
									placeholder="List signature dishes..." 
								/>
								{validationErrors.menuItems && (
									<Form.Control.Feedback type="invalid">{validationErrors.menuItems}</Form.Control.Feedback>
								)}
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Your Review <span className="text-danger">*</span></Form.Label>
								<Form.Control 
									as="textarea" 
									rows={6} 
									value={restaurantReview}
									onChange={(e) => setRestaurantReview(e.target.value)}
									isInvalid={!!validationErrors.restaurantReview}
									placeholder="Share your experience, recommendations, and what made this restaurant special..." 
								/>
								{validationErrors.restaurantReview && (
									<Form.Control.Feedback type="invalid">{validationErrors.restaurantReview}</Form.Control.Feedback>
								)}
							</Form.Group>
							<div className="submit-btn-container">
								<Button type="button" className="btn-submit" onClick={() => openConfirm('restaurant')}>Submit Review</Button>
							</div>
						</>
					)}
				</Form>
			</div>

			{/* Confirmation Modal */}
			<Modal show={showConfirmModal} onHide={closeConfirm} centered>
				<Modal.Header closeButton>
					<Modal.Title>{pendingType === 'recipe' ? 'Confirm Recipe Submission' : 'Confirm Review Submission'}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{pendingType === 'recipe' ? (
						<>
							<p><strong>Recipe:</strong> {recipeName || '—'}</p>
							<p><strong>Cuisine:</strong> {recipeCuisine || '—'}</p>
							<p><strong>Difficulty:</strong> {recipeDifficulty || '—'}</p>
							<p><strong>Prep Time:</strong> {recipeTime ? `${recipeTime} minutes` : '—'}</p>
							{recipePhotoPreview && <p><em>A photo is attached.</em></p>}
							<p className="mt-2">Are you sure you want to submit this recipe to the community?</p>
						</>
					) : (
						<>
							<p><strong>Restaurant:</strong> {restaurantName || '—'}</p>
							<p><strong>Cuisine:</strong> {restaurantCuisine || '—'}</p>
							<p><strong>Price:</strong> {restaurantPrice || '—'}</p>
							<p><strong>Rating:</strong> {restaurantRating > 0 ? `${restaurantRating} / 5` : '—'}</p>
							<p className="mt-2">Are you sure you want to submit this review to the community?</p>
						</>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeConfirm}>Cancel</Button>
					<Button variant="primary" onClick={confirmSubmit} autoFocus>Confirm</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	)
}
