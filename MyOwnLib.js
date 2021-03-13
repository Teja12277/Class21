MyOwnLib.js
function isTouching(obj1,obj2){
  var hdistance1 = obj1.x-obj2.x
  var hdistance2 = obj2.x-obj1.x
  var hcollision = obj2.width/2 +obj1.width/2
  var vdistance1 = obj2.y-obj1.y
  var vdistance2 = obj1.y-obj2.y
  var vcollision = obj1.height/2+obj2.height/2

  if (hdistance1<hcollision && hdistance2<hcollision && vdistance1<vcollision && vdistance2<vcollision){
   return true
  }else{
   return false
  }
}

function bounceOff(obj1,obj2){
  var hdistance1 = obj1.x-obj2.x
  var hdistance2 = obj2.x-obj1.x
  var hcollision = obj2.width/2 +obj1.width/2
  var vdistance1 = obj2.y-obj1.y
  var vdistance2 = obj1.y-obj2.y
  var vcollision = obj1.height/2+obj2.height/2

  if (hdistance1<hcollision && hdistance2<hcollision && vdistance1<vcollision && vdistance2<vcollision){
    obj1.velocityX = obj1.velocityX*(-1)
    obj2.velocityX = obj2.velocityX*(-1)
    
  }else{
    obj1.velocityY = obj1.velocityY*(-1)
    obj2.velocityY = obj2.velocityY*(-1)
  }
}