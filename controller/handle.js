const logger = require('../util/logger.js');
//const db = require('../model/db.json')
const fs = require('fs');
const { json } = require('body-parser');


class controller{
    async test(){
        return "HELLO TEST TEST TEST !!!!!!!!"
    }
    async randomScore(){
        
        var dataSC = fs.readFileSync('./model/score.json')
        var jsonSC = JSON.parse(dataSC)
        var key = Object.keys(jsonSC).length;
        //console.log(key)
        for(var index = 0 ; index < key ; index ++){
            //console.log(jsonSC[index])
            var ran = Math.floor(Math.random() * 100) + 1;
            //console.log(ran)
            jsonSC[index].score = ran
            //console.log(jsonSC[index])
        }
        //write file
        const jsonStr = JSON.stringify(jsonSC,null,2)
        fs.writeFile('./model/score.json', jsonStr, err => {
            // check write file success
            if (err) {
                console.log(' random Score fail', err)
            } else {
                console.log(' random Score success')
            }
        })
        var message = {
            status : 200,
            message : "random Score success"
        }
        return message
    }

    async getScore(){
        var dataSC = fs.readFileSync('./model/score.json')
        var jsonSC = JSON.parse(dataSC)
        var dataST = fs.readFileSync('./model/student.json')
        var jsonST = JSON.parse(dataST)
        var dataSJ = fs.readFileSync('./model/subject.json')
        var jsonSJ = JSON.parse(dataST)
        var keyST = Object.keys(jsonST).length;
        var keySC = Object.keys(jsonSC).length;
        // console.log(keySJ)
        // console.log(keyST)
        var score = []
        for(var index = 0; index < keyST; index ++){
            // var findSC = jsonSC.find(jsonSC => jsonSC.stid === jsonST[index].stid)
            // console.log(findSC)
            // var keyFindSC = Object.keys(findSC).length;
            // console.log(keyFindSC)
            var totalScore = 0
            for(var j = 0; j < keySC; j++){
                if (jsonSC[j].stid === jsonST[index].stid)
                totalScore = totalScore + jsonSC[j].score
            }
            var result = {
                "stid": jsonST[index].stid,
                "totalscore": totalScore
            }
            score.push(result)            
        }
        var final = 
        score.sort(this.compare);

        var message = {
            status : 200,
            message : final
        }
        return message
        

    }

    compare( a, b ) {
        if ( a.totalscore < b.totalscore ){
          return 1;
        }
        if ( a.totalscore > b.totalscore ){
          return -1;
        }
        return 0;
    }

    async voteProgramming(req){
        var dataSC = fs.readFileSync('./model/score.json')
        var jsonSC = JSON.parse(dataSC)
        var arr = [
            {
                "stid" : "610500001",
                "vote" : 0
            },
            {
                "stid" : "610500002",
                "vote" : 0
            },
            {
                "stid" : "610500003",
                "vote" : 0
            },
            {
                "stid" : "610500004",
                "vote" : 0
            },
            {
                "stid" : "610500005",
                "vote" : 0
            },
        ]
        var vote1 = req.vote610500001
        var vote2 = req.vote610500002
        var vote3 = req.vote610500003
        var vote4 = req.vote610500004
        var vote5 = req.vote610500005
        var vote = [vote1,vote2,vote3,vote4,vote5]
        for(var index = 0 ; index < vote.length ; index ++){
            for(var j = 0 ; j < 5;j ++  ){
                if(vote[index] === arr[j].stid)
                arr[j].vote = arr[j].vote + 1 
            }
        }
        var final = arr.sort(this.compare);
        if(final[0].vote != final[1].vote){
            var position = jsonSC.findIndex(jsonSC => jsonSC.stid === final[0].stid, jsonSC.sjid === "05506003")
            jsonSC[position].score = 0
            const jsonStr = JSON.stringify(jsonSC,null,2)
            fs.writeFile('./model/score.json', jsonStr, err => {
                // check write file success
                if (err) {
                    console.log(' เปลี่ยน Score fail', err)
                } else {
                    console.log(' เปลี่ยน Score success')
                }
            })
            var message = {
                status : 200,
                message : final[0]
            }
            return message
        } else{
            var message = {
                status : 200,
                message : "ผลโหวตมีเท่ากันจึงไม่ลบคะแนน"
            }
            return message
        }
    }
    async voteOOP(req){
        var dataSC = fs.readFileSync('./model/score.json')
        var jsonSC = JSON.parse(dataSC)
        var arr = [
            {
                "stid" : "610500001",
                "vote" : 0
            },
            {
                "stid" : "610500002",
                "vote" : 0
            },
            {
                "stid" : "610500003",
                "vote" : 0
            },
            {
                "stid" : "610500004",
                "vote" : 0
            },
            {
                "stid" : "610500005",
                "vote" : 0
            },
        ]
        var vote1 = req.vote610500001
        var vote2 = req.vote610500002
        var vote3 = req.vote610500003
        var vote4 = req.vote610500004
        var vote5 = req.vote610500005
        var vote = [vote1,vote2,vote3,vote4,vote5]
        for(var index = 0 ; index < vote.length ; index ++){
            for(var j = 0 ; j < 5;j ++  ){
                if(vote[index] === arr[j].stid)
                arr[j].vote = arr[j].vote + 1 
            }
        }
        var final = arr.sort(this.compare);
        if(final[0].vote != final[1].vote){
            var sub = "05506004"
            var keySC = Object.keys(jsonSC).length;
            for(var j = 0; j < keySC; j++){
                
            }
            var position = jsonSC.findIndex(jsonSC => jsonSC.stid === final[0].stid, jsonSC.sjid === sub)
            console.log(jsonSC[position])
            jsonSC[position].score = 0
            const jsonStr = JSON.stringify(jsonSC,null,2)
            fs.writeFile('./model/score.json', jsonStr, err => {
                // check write file success
                if (err) {
                    console.log(' เปลี่ยน Score fail', err)
                } else {
                    console.log(' เปลี่ยน Score success')
                }
            })
            var message = {
                status : 200,
                message : final[0]
            }
            return message
        } else{
            var message = {
                status : 200,
                message : "ผลโหวตมีเท่ากันจึงไม่ลบคะแนน"
            }
            return message
        }
    }

    async voteDataSruc(req){
        var dataSC = fs.readFileSync('./model/score.json')
        var jsonSC = JSON.parse(dataSC)
        var arr = [
            {
                "stid" : "610500001",
                "vote" : 0
            },
            {
                "stid" : "610500002",
                "vote" : 0
            },
            {
                "stid" : "610500003",
                "vote" : 0
            },
            {
                "stid" : "610500004",
                "vote" : 0
            },
            {
                "stid" : "610500005",
                "vote" : 0
            },
        ]
        var vote1 = req.vote610500001
        var vote2 = req.vote610500002
        var vote3 = req.vote610500003
        var vote4 = req.vote610500004
        var vote5 = req.vote610500005
        var vote = [vote1,vote2,vote3,vote4,vote5]
        for(var index = 0 ; index < vote.length ; index ++){
            for(var j = 0 ; j < 5;j ++  ){
                if(vote[index] === arr[j].stid)
                arr[j].vote = arr[j].vote + 1 
            }
        }
        var final = arr.sort(this.compare);
        if(final[0].vote != final[1].vote){
            var position = jsonSC.findIndex(jsonSC => jsonSC.stid === final[0].stid, jsonSC.sjid === "05506006")
            jsonSC[position].score = 0
            const jsonStr = JSON.stringify(jsonSC,null,2)
            fs.writeFile('./model/score.json', jsonStr, err => {
                // check write file success
                if (err) {
                    console.log(' เปลี่ยน Score fail', err)
                } else {
                    console.log(' เปลี่ยน Score success')
                }
            })
            var message = {
                status : 200,
                message : final[0]
            }
            return message
        } else{
            var message = {
                status : 200,
                message : "ผลโหวตมีเท่ากันจึงไม่ลบคะแนน"
            }
            return message
        }

    }

    async voteAlgo(req){
        var dataSC = fs.readFileSync('./model/score.json')
        var jsonSC = JSON.parse(dataSC)
        var arr = [
            {
                "stid" : "610500001",
                "vote" : 0
            },
            {
                "stid" : "610500002",
                "vote" : 0
            },
            {
                "stid" : "610500003",
                "vote" : 0
            },
            {
                "stid" : "610500004",
                "vote" : 0
            },
            {
                "stid" : "610500005",
                "vote" : 0
            },
        ]
        var vote1 = req.vote610500001
        var vote2 = req.vote610500002
        var vote3 = req.vote610500003
        var vote4 = req.vote610500004
        var vote5 = req.vote610500005
        var vote = [vote1,vote2,vote3,vote4,vote5]
        for(var index = 0 ; index < vote.length ; index ++){
            for(var j = 0 ; j < 5;j ++  ){
                if(vote[index] === arr[j].stid)
                arr[j].vote = arr[j].vote + 1 
            }
        }
        var final = arr.sort(this.compare);
        if(final[0].vote != final[1].vote){
            var position = jsonSC.findIndex(jsonSC => jsonSC.stid === final[0].stid, jsonSC.sjid === "05506009")
            jsonSC[position].score = 0
            const jsonStr = JSON.stringify(jsonSC,null,2)
            fs.writeFile('./model/score.json', jsonStr, err => {
                // check write file success
                if (err) {
                    console.log(' เปลี่ยน Score fail', err)
                } else {
                    console.log(' เปลี่ยน Score success')
                }
            })
            var message = {
                status : 200,
                message : final[0]
            }
            return message
        } else{
            var message = {
                status : 200,
                message : "ผลโหวตมีเท่ากันจึงไม่ลบคะแนน"
            }
            return message
        }

    }

    async voteAuto(req){
        var dataSC = fs.readFileSync('./model/score.json')
        var jsonSC = JSON.parse(dataSC)
        var arr = [
            {
                "stid" : "610500001",
                "vote" : 0
            },
            {
                "stid" : "610500002",
                "vote" : 0
            },
            {
                "stid" : "610500003",
                "vote" : 0
            },
            {
                "stid" : "610500004",
                "vote" : 0
            },
            {
                "stid" : "610500005",
                "vote" : 0
            },
        ]
        var vote1 = req.vote610500001
        var vote2 = req.vote610500002
        var vote3 = req.vote610500003
        var vote4 = req.vote610500004
        var vote5 = req.vote610500005
        var vote = [vote1,vote2,vote3,vote4,vote5]
        for(var index = 0 ; index < vote.length ; index ++){
            for(var j = 0 ; j < 5;j ++  ){
                if(vote[index] === arr[j].stid)
                arr[j].vote = arr[j].vote + 1 
            }
        }
        var final = arr.sort(this.compare);
        if(final[0].vote != final[1].vote){
            var position = jsonSC.findIndex(jsonSC => jsonSC.stid === final[0].stid, jsonSC.sjid === "05506209")
            jsonSC[position].score = 0
            const jsonStr = JSON.stringify(jsonSC,null,2)
            fs.writeFile('./model/score.json', jsonStr, err => {
                // check write file success
                if (err) {
                    console.log(' เปลี่ยน Score fail', err)
                } else {
                    console.log(' เปลี่ยน Score success')
                }
            })
            var message = {
                status : 200,
                message : final[0]
            }
            return message
        } else{
            var message = {
                status : 200,
                message : "ผลโหวตมีเท่ากันจึงไม่ลบคะแนน"
            }
            return message
        }

    }
      




}


module.exports = controller