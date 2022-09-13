import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function CardFn({ image, desc, name}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader className="head"
        title={name}
      />
      <CardMedia component="img" height="194" image={image} alt="" />
      <CardContent>{desc}</CardContent>
    </Card>
  );
}