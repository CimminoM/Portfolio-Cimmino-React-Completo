import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import "./styles.css";
import image from "./img/cimmino.jpg";

const AvatarCimmino = () => (
  <div style={{ display: "flex", gap: 20 }}>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image className="AvatarImage" src={image} alt="Cimmino Michele" />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        CM
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarCimmino;
