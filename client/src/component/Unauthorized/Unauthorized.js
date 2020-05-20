import React from "react";
import { Typography, Button } from "@material-ui/core";

export default function Unauthorized() {
  return (
    <div>
      <Typography variant="h6">Unauthorized</Typography>
      <Typography variant="body1">
        You must give permissions to use this app
      </Typography>
      <Button variant="contained" color="primary" href="api/auth">
        Grant Permission
      </Button>
    </div>
  );
}
