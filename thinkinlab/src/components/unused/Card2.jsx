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
    <Card className="mt-6 w-full sm:w-64 md:w-72 lg:w-80 p-4 border rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader color="blue-gray" className="relative h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden rounded-t-lg">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </CardHeader>
      <CardBody className="flex flex-col items-center text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
          {title}
        </Typography>
        <Typography className="text-gray-600">
          {description}
        </Typography>
      </CardBody>
      <Link to={pageto} className="w-full flex justify-center my-4">
        <Button className="p-2 sm:p-3 md:p-4 lg:p-5 bg-blue-500 hover:bg-blue-700 text-white rounded-full transform transition-transform duration-300 hover:scale-105">
          {buttonText}
        </Button>
      </Link>
    </Card>
  );
};

export default CustomCard;
