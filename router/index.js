const express = require('express')
const app = express()
const controller = require('../controller/handle');
const logger = require('../util/logger.js');

//test
app.get('/test', async (req,res) =>{
    var test = await new controller().test()
    res.send(test)
})

app.get('/randomScore', async (req,res) =>{
    
    try {
        logger.debug("--------------randomScore-------------")
        
        var result = await new controller().randomScore()
        res.status(result.status)
        res.json(result.message)
        logger.info(result.message)
    } catch (error) {
        let messageError = {
            statusCode: error.statusCode ||  400,
            message: error.message || error
        }
        res.status(messageError.statusCode)
        res.json(messageError)
        logger.error(messageError)
    }
})

app.get('/getScore', async (req,res) =>{
    
    try {
        logger.debug("--------------getScore-------------")
        
        var result = await new controller().getScore()
        res.status(result.status)
        res.json(result.message)
        logger.info(result.message)
    } catch (error) {
        let messageError = {
            statusCode: error.statusCode ||  400,
            message: error.message || error
        }
        res.status(messageError.statusCode)
        res.json(messageError)
        logger.error(messageError)
    }
})

app.post('/voteProgramming', async (req,res) =>{
    
    try {
        logger.debug("--------------voteProgramming-------------")
        
        var result = await new controller().voteProgramming(req.body)
        res.status(result.status)
        res.json(result.message)
        logger.info(result.message)
    } catch (error) {
        let messageError = {
            statusCode: error.statusCode ||  400,
            message: error.message || error
        }
        res.status(messageError.statusCode)
        res.json(messageError)
        logger.error(messageError)
    }
})
app.post('/voteOOP', async (req,res) =>{
    
    try {
        logger.debug("--------------voteOOP-------------")
        
        var result = await new controller().voteOOP(req.body)
        res.status(result.status)
        res.json(result.message)
        logger.info(result.message)
    } catch (error) {
        let messageError = {
            statusCode: error.statusCode ||  400,
            message: error.message || error
        }
        res.status(messageError.statusCode)
        res.json(messageError)
        logger.error(messageError)
    }
})

app.post('/voteDataSruc', async (req,res) =>{
    
    try {
        logger.debug("--------------voteDataSruc-------------")
        
        var result = await new controller().voteDataSruc(req.body)
        res.status(result.status)
        res.json(result.message)
        logger.info(result.message)
    } catch (error) {
        let messageError = {
            statusCode: error.statusCode ||  400,
            message: error.message || error
        }
        res.status(messageError.statusCode)
        res.json(messageError)
        logger.error(messageError)
    }
})

app.post('/voteAlgo', async (req,res) =>{
    
    try {
        logger.debug("--------------voteAlgo-------------")
        
        var result = await new controller().voteAlgo(req.body)
        res.status(result.status)
        res.json(result.message)
        logger.info(result.message)
    } catch (error) {
        let messageError = {
            statusCode: error.statusCode ||  400,
            message: error.message || error
        }
        res.status(messageError.statusCode)
        res.json(messageError)
        logger.error(messageError)
    }
})

app.post('/voteAuto', async (req,res) =>{
    
    try {
        logger.debug("--------------voteAuto-------------")
        
        var result = await new controller().voteAuto(req.body)
        res.status(result.status)
        res.json(result.message)
        logger.info(result.message)
    } catch (error) {
        let messageError = {
            statusCode: error.statusCode ||  400,
            message: error.message || error
        }
        res.status(messageError.statusCode)
        res.json(messageError)
        logger.error(messageError)
    }
})


















module.exports = app












