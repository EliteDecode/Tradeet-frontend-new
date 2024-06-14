import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import StyledTabs from "./StyledTabs";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  React from "react";
import { message , emptyMsg} from "./Message";
import { GoDotFill } from "react-icons/go";



const style = {
  position: 'absolute',
  fontStyle:' sans-serif',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 8,
  textAlign: 'center',
  borderRadius: '10px'
};

export default function Maintabs() {
  const Tabs = [
    {
      header: "All",
    },
    {
      header: "Buyer",
    },
    {
      header: "Seller",
    },
  ];

  const [value, setValue] = useState("0 ");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="lg:w-[90vw] lg:mx-auto   ">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <StyledTabs
              aria-label="Tabs example "
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              style={{
                display: "flex",
              }}
            >
              {Tabs.map((tab, index) => (
                <Tab
                  key={index}
                  sx={{ borderBottom: "none" }}
                  label={
                    <span className={`capitalize font-semibold leading-[19.5px] text-base lg:text-xl lg:leading-[24.38px] ${ value === index.toString() ? "text-[#2D2D2D]" : "text-[#777777]"} ${value === index.toString()
                            ? "border-b-2 border-[#2D2D2D]"
                            : "none"}`}
                      
                    >
                      {tab.header}
                    </span>
                  }
                  value={index.toString()}
                />
              ))}
            </StyledTabs>
          </Box>

          <TabPanel value={"0"}>
          {message.map((msg, index) => (
              <>
              { index == 0 && <h1 className=" font-semibold text-gray-500 text-xl my-5">Today</h1>}
              { index == 2 && <h1 className=" font-semibold text-gray-500 text-xl my-5"> Yesterday</h1>}
              { index ==4 && <h1 className=" font-semibold text-gray-500 text-xl my-5"> Last week</h1> }
                <div
                  key={index}
                  className="flex flex-row justify-between items-center p-3 cursor-pointer"
                  onClick={()=> handleOpen()}
                >
                  <span className="flex flex-col gap-2 font-sans">
                    <p className="font-medium text-lg leading-[14.63px] text-#2D2D2D">
                      {msg.label}
                    </p>
                    <p className="font-normal text-[12px] leading-[12.19px] text-gray-600">
                      {msg.content}
                    </p>
                  </span>

                  <p className="font-medium text-xs leading-[14.63px] text-#777777">
                    <span>
                      { index == 0 && <GoDotFill className=' text-red-700'/>}
                    </span>
                    {msg.time}
                  </p>
                </div>
                <hr />
                <Modal
                    open={open}
                    onClose={handleClose}
                    className=" opacity-45"
                >
                    <Box sx={style}>
                      <h1  className=" text-4xl font-bold">
                        Order Confirmation
                      </h1>
                      <Typography sx={{ my: 2, fontSize:12 }} className=" font-medium">
                        Your Order '[#AHF238Q]' has been confirmed and is being processed <br/>
                        To Track your order, Please click the link below.
                      </Typography>
                      <a href="#" className=" underline font-semibold ">Track Your Order</a>
                    </Box>
                </Modal>
              </>
            ))}
          </TabPanel>
          <TabPanel value="1">
            {message.map((msg, index) => (
              <>
              { index == 0 && <h1 className=" font-semibold text-gray-500 text-xl my-5">Today</h1>}
              { index == 2 && <h1 className=" font-semibold text-gray-500 text-xl my-5"> Yesterday</h1>}
              { index ==4 && <h1 className=" font-semibold text-gray-500 text-xl my-5"> Last week</h1> }
                <div
                  key={index}
                  className="flex flex-row justify-between items-center p-3 cursor-pointer"
                  onClick={()=> handleOpen()}
                >
                  <span className="flex flex-col gap-2 font-sans">
                    <p className="font-medium text-lg leading-[14.63px] text-#2D2D2D">
                      {msg.label}
                    </p>
                    <p className="font-normal text-[12px] leading-[12.19px] text-gray-600">
                      {msg.content}
                    </p>
                  </span>

                  <p className="font-medium text-xs leading-[14.63px] text-#777777">
                    <span>
                      { index == 0 && <GoDotFill className=' text-red-700'/>}
                    </span>
                    {msg.time}
                  </p>
                </div>
                <hr />
                <Modal
                    open={open}
                    onClose={handleClose}
                    className=" opacity-45"
                >
                    <Box sx={style}>
                      <h1  className=" text-4xl font-bold">
                        Order Confirmation
                      </h1>
                      <Typography sx={{ my: 2, fontSize:12 }} className=" font-medium">
                        Your Order '[#AHF238Q]' has been confirmed and is being processed <br/>
                        To Track your order, Please click the link below.
                      </Typography>
                      <a href="#" className=" underline font-semibold ">Track Your Order</a>
                    </Box>
                </Modal>
              </>
            ))}
        </TabPanel>
          
          
          
          <TabPanel value="2">
                {
                  emptyMsg.map((info ,_)=>(
                    <div className=" h-auto p-9 w-full flex justify-center items-center">
                        <h1 className=" font-bold text-3xl ">{info.title}</h1>
                        <p className=" text-gray-600">
                          {info.message}
                        </p>
                        <a href="#" className=" font-semibold underline">{info.linkText}</a>
                    </div>
                  ))
                }
              
          
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
