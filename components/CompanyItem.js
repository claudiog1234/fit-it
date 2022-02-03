import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
<<<<<<< HEAD
import Divider from '@mui/material/Divider';
=======
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
import NextLink from 'next/link';

export default function CompanyItem({ company, addToCartHandler }) {
  return (
    <Card>
      <NextLink href={`/company/${company.slug}`} passHref>
        <CardActionArea>
        <CardMedia
          component="img"
          image={company.companyLogo}
          height="80"
          width="100"
          alt={company.companyName}
        ></CardMedia>
          <CardContent>
            <Typography variant="h4">{company.companyName}</Typography>
          </CardContent>
          <CardContent>
          <Typography variant="button">{company.companyType}</Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
<<<<<<< HEAD
      <Divider />
      <CardActions>
        <Typography> More information ?</Typography>
        <NextLink href={`/company/${company.slug}`} passHref>
        <Button size="small" color="primary">
          Click here !
        </Button>
        </NextLink>
=======
      <CardActions>
        <Typography> More information ?</Typography>
        <Button
          size="small"
          color="primary"
          onClick={() => addToCartHandler(product)}
        >
          Click here !
        </Button>
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
      </CardActions>
    </Card>
  );
}
