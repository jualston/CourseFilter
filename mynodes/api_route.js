
const express = require("express");
const router = express.Router();


const fs = require('fs')
let rawdata = fs.readFileSync('./courses.json');
let uis = JSON.parse(rawdata)


router.get('/', (req,res)=>{
  let outputJSON = {
    sju: uis["courses"]
  }
  res.json(outputJSON)
})

router.get('/by_name/:qname',(req,res)=>{
  let query = req.params['qname']
  filter_name = uis["courses"].filter(q=>q.instructor.includes(query))
  let outputJSON = {
    sju: filter_name
  }
  res.json(outputJSON);
})



router.get('/by_course_code/:qcode',(req,res)=>{
  let code = req.params['qcode']
  filter_course = uis["courses"].filter(q=>q.course_code.includes(code))
  let outputJSON = {
    sju: filter_course
  }
  res.json(outputJSON);
})



router.get('/by_level/:qlevel',(req,res)=>{
  let levv = req.params['qlevel']
  filter_level = uis["courses"].filter(q => q.course_level.includes(levv))
  let outputJSON = {
    sju: filter_level
  }
  res.json(outputJSON);
})

router.get('/by_title/:qtitle',(req,res)=>{
  let tite = req.params['qtitle']
  filter_title = uis["courses"].filter(q => q.title.includes(tite))
  let outputJSON = {
    sju: filter_title
  }
  res.json(outputJSON);
})


// route by qname
router.get('/combined_query/:qname/:qlevel',(req,res)=>{
let name = req.params['qname']
let stage = req.params['qlevel']
filter_combo = uis["courses"].filter(q => {
  if (q.instructor.includes(name) && (q.course_level.includes(stage))){
    return true;
    }
    return false;
}
);
let outputJSON = {
  sju: filter_combo
}
res.json(outputJSON);


})
module.exports = router;
