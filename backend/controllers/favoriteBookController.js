import asyncHandler from 'express-async-handler'
import FavoriteBook from '../models/favoriteBookModel.js'

// @desc    Create new favorite book
// @route   POST /api/favorites
// @access  Public
const createFavorite = asyncHandler(async (req, res) => {
    const { 
        googleBookId, 
        title, 
        thumbnail, 
        authors, 
        averageRating, 
        ratingsCount
    } = req.body

    const exists = await FavoriteBook.findOne({ googleBookId })
    if (exists) {
        res.status(404)
        throw new Error('BOOK already added')
    }

    const favorite = await FavoriteBook.create({ 
        googleBookId, 
        title, 
        thumbnail, 
        authors, 
        averageRating, 
        ratingsCount
    })

    if (favorite) {
        res.status(201).json(favorite._doc)
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

// @desc    Get all subjects
// @route   GET /api/subjects
// @access  Public
// const getSubjects = asyncHandler(async (req, res) => {
//     const subjects = await Subject.find({})
//     res.status(200).json({ 
//         total: subjects.length, 
//         totalPoin: generateTotalPoin(subjects),  
//         subjects })
// })

// @desc    Get subjects by category
// @route   GET /api/subjects/categories/:category
// @access  Public
// const getSubjectsByCategory = asyncHandler(async (req, res) => {
//     const subjects = await Subject.find({ category: req.params.category.toUpperCase() })
//     if (subjects) {
//         res.status(200).json({
//             total: subjects.length,
//             totalPoin: generateTotalPoin(subjects),
//             subjects
//         })
//     } else {
//         res.status(400)
//         throw new Error('Subject not found')
//     }
// })

// @desc    Get subject by id
// @route   GET /api/subjects/:id
// @access  Public
// const getSubject = asyncHandler(async (req, res) => {
//     const subject = await Subject.findById(req.params.id)
//     if (subject) {
//         res.status(200).json(subject)
//     } else {
//         res.status(400)
//         throw new Error('Subject not found')
//     }
// })

// @desc    Get subject categories
// @route   GET /api/subjects/categories
// @access  Public
// const getSubjectCategories = asyncHandler(async (req, res) => {
//     const cateogry = await Subject.aggregate([
//         { $unwind: "$category" },
//         {
//             $group: {
//                 _id: "$category",
//                 count: { $sum: 1 },
//             },
//         },
//     ])
//     // const subject = await Subject.findById(req.params.id)
//     if (cateogry) {
//         res.status(200).json(cateogry)
//     } else {
//         res.status(400)
//         throw new Error('Cateogry not found')
//     }
// })

// @desc    Ubdate a subject
// @route   PUT /api/subjects/:id
// @access  Private/Admin
// const updateSubject = asyncHandler(async (req, res) => {
//     const subject = await Subject.findById(req.params.id)
//     if (subject) {
//         subject.name = req.body.name || subject.name
//         subject.category = req.body.category || subject.category
//         subject.targets = generateTargets(
//             req.body.totalPages, 
//             req.body.targets, 
//             req.body.newTargets,
//             subject
//         ) || subject.targets
        
//         const updatedSubject = await subject.save()
//         res.status(200).json(updatedSubject)
//     } else {
//         res.status(400)
//         throw new Error('Subject not found')
//     }
// })

// @desc    Delete a subject
// @route   Delete /api/subjects/:id
// @access  Private/Admin
// const deleteSubject = asyncHandler(async (req, res) => {
//     const subject = await Subject.findById(req.params.id)
//     if (subject) {
//         await subject.remove()
//         res.status(200).json({ id: req.params.id })
//     } else {
//         res.status(400)
//         throw new Error('Subject not found')
//     }
// })


export { 
    createFavorite,
}