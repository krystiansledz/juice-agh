import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

type ButtonLink = {
  to: string;
  text: string;
};

type Props = {
  children: JSX.Element | JSX.Element[];
  title: string;
  buttonLinks?: Array<ButtonLink>;
};

const Auth: React.FC<Props> = (props) => {
  const { children, title, buttonLinks } = props;

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      direction="column"
      margin="auto"
      maxWidth="400px"
    >
      <Stack spacing={2} width={1}>
        <Typography color="primary" variant="h4" align="center">
          {title}
        </Typography>
        {children}
        {buttonLinks && (
          <Stack
            direction="row"
            justifyContent={
              buttonLinks.length > 1 ? "space-between" : "flex-end"
            }
            spacing={2}
          >
            {buttonLinks.map((buttonLink) => (
              <Button
                key={buttonLink.text}
                component={RouterLink}
                to={buttonLink.to}
              >
                {buttonLink.text}
              </Button>
            ))}
          </Stack>
        )}
      </Stack>
    </Grid>
  );
};

export default Auth;

export const Form = styled.form`
  display: flex;
  width: 100%;
`;
