import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const CustomCard = ({ imageSrc, title, description, buttonText, pageto }) => {
  return (
    <Card className="mt-6 w-full sm:w-64 md:w-72 lg:w-80 p-2 border-1 flex flex-col items-center">
      <CardHeader color="blue-gray" className="relative h-48 sm:h-52 md:h-56 lg:h-60">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody className="flex flex-col items-center text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <Link to={pageto} className="w-full flex justify-center my-4">
        <Button className="p-2 sm:p-3 md:p-4 lg:p-5 bg-red-400">
          {buttonText}
        </Button>
      </Link>
    </Card>
  );
};

export default CustomCard;
