import React,{useState} from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";


 
export function DrawerPlacement({callback,callback2}) {
  
  const [openRight, setOpenRight] = React.useState(false);
 

  
  
 
  
  const openDrawerRight = () =>{ setOpenRight(true);
       callback(80.5);
       callback2(false)
  }
  const closeDrawerRight = () =>{ setOpenRight(false);
    callback(100);
    callback2(true)
  }
  
 
  return (
    <React.Fragment >
      <div className="flex flex-wrap gap-4 " >
        
        <div onClick={openDrawerRight} className="text-black w-[50px]   cursor-pointer">Cart</div>
      </div>
       
      <Drawer 
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4  z-99999  border-solid border-l-[#3e3b3b] bg-[white] border-[0.8px] overflow-auto  "
        
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-bold text-[20px]">
            Your Cart
          </Typography>
          <IconButton
            variant="text"
            color="blue"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal grid grid-cols-1 grid-rows-3 ">
          <div className=" grid grid-cols-[3fr_1fr] p-[20px]">
            <div className="test-semibold">Ultimate Burrito Bowl</div>
            <div><Button className="bg-[orange] text-black h-[50px] w-[100px] rounded-[20px]">Quantity</Button></div>
          </div>
          <div className=" p-[20px] test-semibold text-red-900">Available only after 11:00AM</div>
          <div className=" p-[20px] test-semibold">₹149  
₹299</div>

          </Typography>
        <div className="flex gap-2 flex-col">
          <Button size="sm" variant="outlined" className="bg-[orange] rounded-[20px] w-[250px]">
            Place Order
          </Button>
          <div className="border-[solid] borser-[1px] border-[green] bg-green-200 p-[5px] text-green-800 rounded-[5px]">
          Safety Assured meals and contactless delivery
          </div>
          
        </div>
      </Drawer>
     
    </React.Fragment>
  );
}


