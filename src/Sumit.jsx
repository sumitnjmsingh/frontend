import * as React from "react"
import {useState} from "react"
import {Link, NavLink} from 'react-router-dom'


import { Button } from "./components/ui/button"
import {AlertDialogDemo} from "./components/Home/Alert.jsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select"

function CardWithForm({img, onIncrement,count}) {
  
  

  const imageAddress = {
    id: 159,
    imageName: img,
    count:count,
    description: 'A beautiful image',
  };

  


  const encodedImageData = encodeURIComponent(JSON.stringify(imageAddress));
 
  return (
    <Card className="w-[310px]  ">
      <CardHeader>
        <CardTitle>Food of Your Choice</CardTitle>
        <CardDescription>Have Nice Taste in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Food Type..</Label>
              
            </div>
            <div className=" h-[250px]">
            <Link to={`/main2?imageAddress=${encodedImageData}`} className="h-[100%]"><img  src={img} className="h-[90%] w-[90%] transition-all duration-2500 ease-in hover:scale-[1.15]  rounded-[4px]"></img></Link>

               </div>
          </div>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-[orange] text-white" variant="outline" >BUY</Button>
        <Button className="bg-[#896523]" onClick={ onIncrement}>ADD TO CART</Button>
      </CardFooter>
    </Card>
  )
}
export default CardWithForm;