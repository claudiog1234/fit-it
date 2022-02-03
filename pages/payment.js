import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';
import useStyles from '../utils/styles';
import {
  Button,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';

export default function Payment() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyles();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const {
<<<<<<< HEAD
    cart: { shippingAddress },
  } = state;
  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/shipping');
=======
    cart: { billingAddress }, //shippingAddress, aboModell
  } = state;
  useEffect(() => {
    if (!billingAddress.address) { //!shippingAddress.address
      router.push('/billing'); //shipping
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
    } else {
      setPaymentMethod(Cookies.get('paymentMethod') || '');
    }
  }, []);
  const submitHandler = (e) => {
    closeSnackbar();
    e.preventDefault();
    if (!paymentMethod) {
      enqueueSnackbar('Payment method is required', { variant: 'error' });
    } else {
      dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
      Cookies.set('paymentMethod', paymentMethod);
      router.push('/placeorder');
    }
  };
  return (
    <Layout title="Payment Method">
<<<<<<< HEAD
      <CheckoutWizard activeStep={2}></CheckoutWizard>
=======
      <CheckoutWizard activeStep={3}></CheckoutWizard>
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
      <form className={classes.form} onSubmit={submitHandler}>
        <Typography component="h1" variant="h1">
          Payment Method
        </Typography>
        <List>
          <ListItem>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Payment Method"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  label="PayPal"
                  value="PayPal"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
<<<<<<< HEAD
                  label="Stripe"
                  value="Stripe"
=======
                  label="Card"
                  value="Card"
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Cash"
                  value="Cash"
                  control={<Radio />}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Continue
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              type="button"
              variant="contained"
<<<<<<< HEAD
              onClick={() => router.push('/shipping')}
=======
              onClick={() => router.push('/abo')}
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
            >
              Back
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
