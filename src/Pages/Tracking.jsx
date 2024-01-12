import React, { useState } from "react";
import {
  Input, Button, Stepper, Step, Typography, Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineHeader,
} from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";



function Tracking() {
  const [trackNo, settrackNo] = useState("");
  const onChange = ({ target }) => settrackNo(target.value);


  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const handleTrackSubmit = ()=>{
    alert(trackNo)
  }



  return (
    <div className="container md:mx-auto p-4">
      <div className="text-center p-5 bg-blue-400 text-white mb-5">
        <p className="text-xl">Parcel Tracking</p>
      </div>
      <div className="relative flex w-full max-w-[24rem] my-5" size="lg">
        <Input
          type="text"
          label="Enter Tracking Number"
          value={trackNo}
          onChange={onChange}
          className="pr-20 uppercase"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={trackNo ? "blue" : "blue-gray"}
          disabled={!trackNo}
          className="!absolute right-1 top-1 rounded"
          onClick={handleTrackSubmit}
        >
          Track
        </Button>
      </div>

      {/* STEPPER */}
      <div className="w-full py-4 ">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <HomeIcon className="h-5 w-5" />
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <UserIcon className="h-5 w-5" />
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <CogIcon className="h-5 w-5" />
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <CogIcon className="h-5 w-5" />
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <CogIcon className="h-5 w-5" />
          </Step>
        </Stepper>

        <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>

      </div>
      {/*   SHIPPING PROCESS DETAILS */}
      <div className="md:flex gap-x-10 my-10">

      <div className="flex-1 ">
        <Timeline>
          <TimelineItem className="h-40 my-2">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border-2 border-red-300 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost">
                <BellIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col">
                <Typography variant="h6" color="blue-gray">
                  $2400, Design changes
                </Typography>
                <Typography variant="small" color="gray" className="font-light">
                  22 DEC 7:20 PM
                </Typography>
                <Typography variant="small" color="black" className="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatum magni nulla labore sapiente atque dolorum totam! Harum, nihil sint!
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
          <TimelineItem className="h-28">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="red">
                <ArchiveBoxIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  New order #1832412
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  21 DEC 11 PM
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
          <TimelineItem className="h-28">
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="green">
                <CurrencyDollarIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  Payment completed for order #4395133
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  20 DEC 2:20 AM
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </Timeline>
      </div>

      <div className="flex-1 items-start">
        <div className="relative rounded-xl border border-blue-gray-50 bg-white p-3 mb-5 shadow-lg shadow-blue-gray-900/5 md:w-[70%]">
        <Typography variant="h6" color="blue-gray">Senders Address</Typography>
        <hr />
        <Typography variant="h6" color="blue-gray">Name : test test test</Typography>
        <Typography variant="h6" color="blue-gray">Address : test test test</Typography>
        <Typography variant="h6" color="blue-gray">Phone : test test test</Typography>
        
        </div>
        <div>Receiver Address</div>
      </div>
      </div>


    </div>
  );
}

export default Tracking;
